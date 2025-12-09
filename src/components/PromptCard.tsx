"use client";

import { useState } from "react";
import styles from "@/styles/components/PromptCard.module.scss";

interface PromptCardProps {
    title: string;
    content: string;
    id: string; // Unique ID for accessibility or logic if needed
}

export default function PromptCard({ title, content, id }: PromptCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
            alert("복사에 실패했습니다.");
        }
    };

    return (
        <div className={styles.templateItem}>
            <h3>{title}</h3>
            <div className={styles.copyBox}>
                <pre>{content}</pre>
                <button
                    className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
                    onClick={handleCopy}
                >
                    {copied ? "복사완료!" : "복사"}
                </button>
            </div>
        </div>
    );
}
