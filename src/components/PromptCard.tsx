"use client";

import { useState } from "react";
import styles from "@/styles/components/PromptCard.module.scss";

interface PromptCardProps {
    title: string;
    content: string;
    id: string; // Unique ID for accessibility or logic if needed
}

import usePromptStorage from "@/hooks/usePromptStorage";

export default function PromptCard({ title, content, id }: PromptCardProps) {
    const [copied, setCopied] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentContent, setCurrentContent] = useState(content);
    const { savePrompt, isSaved, removePrompt } = usePromptStorage();

    const saved = isSaved({ title, content: currentContent });

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

    const handleSave = () => {
        if (saved) {
            if (confirm("보관함에서 삭제하시겠습니까?")) {
                removePrompt({ title, content: currentContent });
            }
        } else {
            const success = savePrompt({ title, content: currentContent });
            if (success) alert("보관함에 저장되었습니다!");
        }
    };

    return (
        <div className={styles.templateItem}>
            <div className={styles.headerRow}>
                <h3>{title}</h3>
                <button
                    className={`${styles.saveBtn} ${saved ? styles.saved : ""}`}
                    onClick={handleSave}
                    title={saved ? "보관함에서 삭제" : "보관함에 저장"}
                >
                    {saved ? "❤️ 저장됨" : "🤍 저장"}
                </button>
            </div>

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

                <div className={styles.actionButtons}>
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
        </div>
    );
}
