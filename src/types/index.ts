/* =====================================================
   mattab — Core Type Definitions
   ===================================================== */

export interface UserProfile {
    pub: string;           // Gun SEA public key
    alias: string;
    bio?: string;
    avatar?: string;
    joinedAt: number;
}

export interface Subtab {
    slug: string;
    name: string;
    description: string;
    icon: string;          // emoji or icon id
    createdBy: string;     // pubkey
    createdAt: number;
}

export interface Post {
    id: string;
    title: string;
    body: string;          // Markdown + LaTeX
    author: string;        // pubkey
    subtab: string;        // subtab slug
    tags: string[];
    type: 'post' | 'help-request' | 'paper-link';
    difficulty?: 1 | 2 | 3 | 4 | 5;  // for help-requests
    createdAt: number;
    updatedAt: number;
}

export interface Comment {
    id: string;
    postId: string;
    author: string;
    body: string;
    parentId?: string;     // for threaded replies
    createdAt: number;
}

export interface Paper {
    id: string;
    title: string;
    authors: string[];     // pubkeys
    abstract: string;
    body: string;
    version: number;
    signature?: string;    // SEA signature
    createdAt: number;
    updatedAt: number;
}

export interface WikiPage {
    slug: string;
    subtab: string;
    title: string;
    content: string;
    lastEditor: string;
    sources: string[];     // citation URLs
    updatedAt: number;
}

export interface Notebook {
    id: string;
    title: string;
    content: string;       // encrypted locally
    createdAt: number;
    updatedAt: number;
}

export interface GraphNode {
    id: string;
    label: string;
    type: 'wiki' | 'paper' | 'post' | 'tag' | 'subtab';
    subtab?: string;
    links: string[];       // ids of connected nodes
}

export interface DirectMessage {
    id: string;
    from: string;
    body: string;          // encrypted
    timestamp: number;
}
