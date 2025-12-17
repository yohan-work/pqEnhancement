"use client";

import { useState } from "react";
import { RoleData } from "@/data/prompts";
import PromptCard from "./PromptCard";
import styles from "@/styles/components/TabSystem.module.scss";

interface TabSystemProps {
    roles: RoleData[];
}

export default function TabSystem({ roles }: TabSystemProps) {
    const [activeTab, setActiveTab] = useState(roles[0].id);
    const [searchQuery, setSearchQuery] = useState("");

    const activeRole = roles.find((role) => role.id === activeTab);

    // Filter prompts based on search query
    const filteredPrompts = activeRole?.prompts.filter((prompt) =>
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.content.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className={styles.tabContainer}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="템플릿 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.tabButtons}>
                {roles.map((role) => (
                    <button
                        key={role.id}
                        className={`${styles.tabBtn} ${activeTab === role.id ? styles.active : ""
                            }`}
                        onClick={() => {
                            setActiveTab(role.id);
                            setSearchQuery(""); // Reset search on tab change
                        }}
                    >
                        {role.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {activeRole && (
                    <div className={styles.roleGroup}>
                        {filteredPrompts.length > 0 ? (
                            filteredPrompts.map((prompt, index) => (
                                <PromptCard
                                    key={`${activeRole.id}-${index}`}
                                    id={`${activeRole.id}-${index}`}
                                    title={prompt.title}
                                    content={prompt.content}
                                />
                            ))
                        ) : (
                            <p className={styles.noResults}>검색 결과가 없습니다.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
