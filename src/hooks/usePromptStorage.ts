"use client";

import { useState, useEffect, useCallback } from "react";
import { Prompt } from "@/data/prompts";

const STORAGE_KEY = "my_prompt_library";
const EVENT_KEY = "prompt_storage_change";

export default function usePromptStorage() {
    const [savedPrompts, setSavedPrompts] = useState<Prompt[]>([]);

    // Load prompts from local storage
    const loadPrompts = useCallback(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setSavedPrompts(JSON.parse(stored));
            }
        } catch (e) {
            console.error("Failed to load prompts:", e);
        }
    }, []);

    // Sync with other components
    useEffect(() => {
        loadPrompts();

        const handleStorageChange = () => {
            loadPrompts();
        };

        window.addEventListener(EVENT_KEY, handleStorageChange);
        // Also listen to storage event for multi-tab sync (optional but good practice)
        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener(EVENT_KEY, handleStorageChange);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [loadPrompts]);

    const savePrompt = useCallback((prompt: Prompt) => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            let prompts: Prompt[] = stored ? JSON.parse(stored) : [];

            // Check if already exists (by title and content, or add ID support later if needed)
            // For now, let's assume title + content uniqueness or just append if distinct.
            // Better: Update if title matches? Or just add new? 
            // Let's use title as a simple key for now to prevent duplicates, 
            // or check deep equality.
            // Strategy: Remove duplicate if exact match exists, otherwise add.

            const existingIndex = prompts.findIndex(
                (p) => p.title === prompt.title && p.content === prompt.content
            );

            if (existingIndex === -1) {
                prompts = [prompt, ...prompts];
            } else {
                // If exact match already exists, do nothing or move to top?
                // Let's move to top (recent)
                prompts.splice(existingIndex, 1);
                prompts = [prompt, ...prompts];
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
            setSavedPrompts(prompts);
            window.dispatchEvent(new Event(EVENT_KEY));
            return true;
        } catch (e) {
            console.error("Failed to save prompt:", e);
            return false;
        }
    }, []);

    const removePrompt = useCallback((prompt: Prompt) => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return;

            let prompts: Prompt[] = JSON.parse(stored);
            prompts = prompts.filter(
                (p) => !(p.title === prompt.title && p.content === prompt.content)
            );

            localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
            setSavedPrompts(prompts);
            window.dispatchEvent(new Event(EVENT_KEY));
        } catch (e) {
            console.error("Failed to remove prompt:", e);
        }
    }, []);

    const isSaved = useCallback(
        (prompt: Prompt) => {
            return savedPrompts.some(
                (p) => p.title === prompt.title && p.content === prompt.content
            );
        },
        [savedPrompts]
    );

    return { savedPrompts, savePrompt, removePrompt, isSaved };
}
