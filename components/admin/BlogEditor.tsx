"use client";

import { useActionState, useRef, useState } from "react";
import Link from "next/link";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { deleteBlog, saveBlog, type BlogSaveState } from "@/app/admin/blogs/actions";
import { slugifyTitle, type BlogCategory, type BlogFaq, type BlogRecord } from "@/lib/blog";

const emptyBlog: BlogRecord = {
  id: "",
  created_at: "",
  updated_at: "",
  slug: "",
  title: "",
  meta_title: "",
  meta_description: "",
  category: "seller",
  content_html: "<p></p>",
  faqs: [],
  cover_image_url: null,
  published: false,
};

async function uploadImage(file: File) {
  const body = new FormData();
  body.append("file", file);
  const response = await fetch("/admin/upload", { method: "POST", body });
  const payload = (await response.json()) as { url?: string; error?: string };
  if (!response.ok || !payload.url) throw new Error(payload.error || "Upload failed.");
  return payload.url;
}

export default function BlogEditor({ blog = emptyBlog }: { blog?: BlogRecord }) {
  const [state, formAction, pending] = useActionState<BlogSaveState, FormData>(saveBlog, null);
  const [title, setTitle] = useState(blog.title);
  const [slug, setSlug] = useState(blog.slug);
  const [slugTouched, setSlugTouched] = useState(Boolean(blog.id));
  const [category, setCategory] = useState<BlogCategory>(blog.category);
  const [cover, setCover] = useState(blog.cover_image_url ?? "");
  const [faqs, setFaqs] = useState<BlogFaq[]>(blog.faqs.length ? blog.faqs : [{ question: "", answer: "" }]);
  const [html, setHtml] = useState(blog.content_html || "<p></p>");
  const [uploadError, setUploadError] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: false,
        underline: false,
      }),
      Underline,
      LinkExtension.configure({ openOnClick: false, autolink: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({ placeholder: "Write the article here, or paste from Word…" }),
    ],
    content: blog.content_html || "<p></p>",
    editorProps: {
      attributes: { class: "blog-editor-surface" },
      transformPastedHTML(pasted) {
        return pasted
          .replace(/<!--[\s\S]*?-->/g, "")
          .replace(/<\/?o:p>/g, "")
          .replace(/\sclass="Mso[^"]*"/g, "")
          .replace(/\smso-[^:]+:[^;"]+;?/g, "");
      },
    },
    onUpdate: ({ editor: current }) => setHtml(current.getHTML()),
  });

  async function insertImage(file: File | undefined, target: "content" | "cover") {
    if (!file) return;
    setUploadError("");
    setUploading(true);
    try {
      const url = await uploadImage(file);
      if (target === "cover") setCover(url);
      else editor?.chain().focus().setImage({ src: url, alt: title || "Blog image" }).run();
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={formAction} className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
      {blog.id ? <input type="hidden" name="id" value={blog.id} /> : null}
      <input type="hidden" name="contentHtml" value={html} />
      <input type="hidden" name="faqs" value={JSON.stringify(faqs)} />
      <input type="hidden" name="coverImageUrl" value={cover} />

      <div className="space-y-5">
        <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <Field label="H1 title" hint="This is the heading visitors see.">
            <input
              name="title"
              required
              value={title}
              onChange={(event) => {
                const next = event.target.value;
                setTitle(next);
                if (!slugTouched) setSlug(slugifyTitle(next));
              }}
              className="field"
              placeholder="How Florida sellers prepare a confidential sale"
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Meta title" hint="Shown in Google. Aim for about 60 characters.">
              <MetaInput name="metaTitle" defaultValue={blog.meta_title} max={70} placeholder="Sell a Florida business | KMF" />
            </Field>
            <Field label="URL slug">
              <input
                name="slug"
                required
                value={slug}
                onChange={(event) => {
                  setSlugTouched(true);
                  setSlug(slugifyTitle(event.target.value));
                }}
                className="field"
              />
              <p className="text-xs text-slate-500 mt-1">Live URL: <span className="font-mono text-slate-700">/{category === "seller" ? "florida-business-seller-resources" : "florida-business-buyer-resources"}/{slug || "..."}</span></p>
            </Field>
          </div>
          <Field label="Meta description" hint="Shown under the title in search results. Aim for about 160 characters.">
            <MetaInput
              name="metaDescription"
              defaultValue={blog.meta_description}
              max={170}
              multiline
              placeholder="A practical guide for Florida business owners preparing a confidential sale."
            />
          </Field>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <Toolbar
            editor={editor}
            uploading={uploading}
            onImage={() => fileRef.current?.click()}
          />
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              void insertImage(event.target.files?.[0], "content");
              event.target.value = "";
            }}
          />
          <EditorContent editor={editor} className="blog-editor" />
          <p className="px-4 py-3 text-xs text-slate-500 border-t border-slate-100">
            Paste from Word, Google Docs, or a web page. Tables, headings, lists, and links stay in the article. Images upload to Cloudinary.
          </p>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-black text-[#0b1c2d]">FAQs</h2>
            <button
              type="button"
              onClick={() => setFaqs((current) => [...current, { question: "", answer: "" }])}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm font-semibold hover:border-[#c59b27]"
            >
              Add FAQ
            </button>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-slate-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Question {index + 1}</p>
                <button
                  type="button"
                  onClick={() => setFaqs((current) => current.filter((_, item) => item !== index))}
                  className="text-xs font-semibold text-red-600"
                >
                  Remove
                </button>
              </div>
              <input
                value={faq.question}
                onChange={(event) =>
                  setFaqs((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, question: event.target.value } : item)))
                }
                className="field"
                placeholder="Question"
              />
              <textarea
                value={faq.answer}
                rows={3}
                onChange={(event) =>
                  setFaqs((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, answer: event.target.value } : item)))
                }
                className="field"
                placeholder="Answer"
              />
            </div>
          ))}
        </section>
      </div>

      <aside className="space-y-4 xl:sticky xl:top-4">
        <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <Field label="Category">
            <select
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value as BlogCategory)}
              className="field"
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </Field>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <input type="checkbox" name="published" defaultChecked={blog.published} className="w-4 h-4 accent-[#c59b27]" />
            Published
          </label>
          {state && "error" in state ? <p className="text-sm text-red-600">{state.error}</p> : null}
          {state && "saved" in state ? <p className="text-sm text-emerald-700">Saved.</p> : null}
          {uploadError ? <p className="text-sm text-red-600">{uploadError}</p> : null}
          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 rounded-lg bg-[#c59b27] text-white font-bold text-sm hover:bg-[#b0881f] disabled:opacity-60"
          >
            {pending ? "Saving..." : blog.id ? "Save changes" : "Publish draft"}
          </button>
          <Link href="/admin/blogs" className="block text-center text-sm font-semibold text-slate-500">
            Back to blogs
          </Link>
          {blog.id && blog.published && blog.slug ? (<a href={`/${category === "seller" ? "florida-business-seller-resources" : "florida-business-buyer-resources"}/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-bold text-[#c59b27] hover:underline">View live article ?</a>) : null}
          {blog.id ? (
            <button
              type="submit"
              formAction={deleteBlog}
              className="w-full py-2 rounded-lg border border-red-200 text-red-700 text-sm font-semibold"
              onClick={(event) => {
                if (!window.confirm("Delete this blog?")) event.preventDefault();
              }}
            >
              Delete
            </button>
          ) : null}
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wide text-slate-500">Cover image</h2>
          {cover ? <img src={cover} alt="" className="w-full h-40 object-cover rounded-lg" /> : null}
          <input
            ref={coverRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              void insertImage(event.target.files?.[0], "cover");
              event.target.value = "";
            }}
          />
          <button
            type="button"
            onClick={() => coverRef.current?.click()}
            className="w-full py-2 rounded-lg border border-slate-300 text-sm font-semibold"
          >
            {uploading ? "Uploading..." : cover ? "Replace cover" : "Upload cover"}
          </button>
          {cover ? (
            <button type="button" onClick={() => setCover("")} className="text-xs font-semibold text-red-600">
              Remove cover
            </button>
          ) : null}
        </section>
      </aside>
    </form>
  );
}

function MetaInput({
  name,
  defaultValue,
  max,
  placeholder,
  multiline = false,
}: {
  name: string;
  defaultValue: string;
  max: number;
  placeholder: string;
  multiline?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const shared = {
    name,
    value,
    placeholder,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(event.target.value),
    className: "field",
  };
  return (
    <div>
      {multiline ? <textarea {...shared} rows={4} /> : <input {...shared} />}
      <p className={`mt-1 text-xs ${value.length > max ? "text-amber-700" : "text-slate-400"}`}>{value.length} characters</p>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</span>
      {children}
      {hint ? <span className="block mt-1 text-xs text-slate-400">{hint}</span> : null}
    </label>
  );
}

function Toolbar({
  editor,
  uploading,
  onImage,
}: {
  editor: Editor | null;
  uploading: boolean;
  onImage: () => void;
}) {
  if (!editor) return <div className="h-12 border-b border-slate-200 bg-slate-50" />;

  const setLink = () => {
    const previous = editor.getAttributes("link").href as string | undefined;
    const next = window.prompt("Link URL", previous || "https://");
    if (next === null) return;
    if (!next.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().setLink({ href: next.trim() }).run();
  };

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b border-slate-200 bg-slate-50">
      <Tool active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Tool>
      <Tool active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Tool>
      <Tool active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</Tool>
      <Tool active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Tool>
      <Tool active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Tool>
      <Tool active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>List</Tool>
      <Tool active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>Numbered</Tool>
      <Tool active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</Tool>
      <Tool active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>Left</Tool>
      <Tool active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>Center</Tool>
      <Tool active={editor.isActive("link")} onClick={setLink}>Link</Tool>
      <Tool onClick={onImage}>{uploading ? "Uploading" : "Image"}</Tool>
      <Tool onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>Table</Tool>
      <Tool onClick={() => editor.chain().focus().addRowAfter().run()}>Row</Tool>
      <Tool onClick={() => editor.chain().focus().addColumnAfter().run()}>Column</Tool>
      <Tool onClick={() => editor.chain().focus().deleteTable().run()}>Remove table</Tool>
      <Tool onClick={() => editor.chain().focus().undo().run()}>Undo</Tool>
      <Tool onClick={() => editor.chain().focus().redo().run()}>Redo</Tool>
    </div>
  );
}

function Tool({
  children,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-1.5 rounded-md text-xs font-bold ${active ? "bg-[#0b1c2d] text-white" : "bg-white border border-slate-200 text-slate-700 hover:border-[#c59b27]"}`}
    >
      {children}
    </button>
  );
}
