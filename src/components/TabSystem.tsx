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

    const activeRole = roles.find((role) => role.id === activeTab);

    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
                {roles.map((role) => (
                    <button
                        key={role.id}
                        className={`${styles.tabBtn} ${activeTab === role.id ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab(role.id)}
                    >
                        {role.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {/* Role Badge (Optional, reused from legacy styles or just implicitly shown) */}
                {activeRole && (
                    <div className={styles.roleGroup}>
                        {/* Note: In Next.js, we don't necessarily need the badge anymore since the tab indicates context, 
                 but if we want to mimic the legacy look exactly inside the content, we can. 
                 For now, just listing the prompts is cleaner. */}

                        {activeRole.prompts.map((prompt, index) => (
                            <PromptCard
                                key={`${activeRole.id}-${index}`}
                                id={`${activeRole.id}-${index}`}
                                title={prompt.title}
                                content={prompt.content}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
