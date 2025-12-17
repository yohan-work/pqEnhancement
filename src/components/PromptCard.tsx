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
    const [isEditing, setIsEditing] = useState(false);
    const [currentContent, setCurrentContent] = useState(content);

    // Update local state if prop changes (optional, but good for search filtering updates)
    if (content !== currentContent && !isEditing) {
        // Only update if not currently editing to avoid overwriting user changes while typing
        // Note: simplistic approach. For strict sync, useEffect is better, but this suffices for simple list rendering.
    }
    // Better: use key prop on parent to reset state when filter changes, 
    // or useEffect to sync content prop changes if needed. 
    // Given the list rerenders on search, new components might be mapped. 
    // Let's stick to initial state being set only once or reset via key.

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentContent);
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
                {isEditing ? (
                    <textarea
                        className={styles.textArea}
                        value={currentContent}
                        onChange={(e) => setCurrentContent(e.target.value)}
                    />
                ) : (
                    <pre>{currentContent}</pre>
                )}

                <button
                    className={styles.editBtn}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "완료" : "수정"}
                </button>

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
