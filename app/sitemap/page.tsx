"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FadeImage from "@/components/ui/fade-image";

export default function SitemapPage() {
    const [loaded, setLoaded] = useState(false);

    const sitemapStructure = {
        main: [
            { name: "Home", path: "/" },
            { name: "Main Campus", path: "/main-campus" },
            { name: "Playgroup Jubilee Hills", path: "/playgroup-jubileehills" },
            { name: "Playgroup Narsingi", path: "/playgroup-narsingi" },
            { name: "Privacy Policy", path: "/privacy-policy" },
        ],
        mainCampus: {
            about: [
                { name: "Our Story", path: "/main-campus/our-story" },
                { name: "Mission & Vision", path: "/main-campus/mission-and-vision" },
                { name: "FKS Force", path: "/main-campus/fks-force" },
                { name: "Nutrition", path: "/main-campus/nutrition" },
            ],
            learning: [
                { name: "Board & Curriculum", path: "/main-campus/board-and-curriculum" },
                { name: "Pedagogy", path: "/main-campus/pedagogy" },
                { name: "Extra Activities", path: "/main-campus/extra-activities" },
            ],
            beyond: [
                { name: "Leadership", path: "/main-campus/leadership" },
                { name: "Sports & Games", path: "/main-campus/sports-games" },
                { name: "Theatre & Drama", path: "/main-campus/theatre-and-drama" },
                { name: "Field Trips", path: "/main-campus/field-trips" },
                { name: "Events & Festivals", path: "/main-campus/events-and-festivals" },
            ],
            other: [
                { name: "Campus", path: "/main-campus/campus" },
                { name: "Connect", path: "/main-campus/connect" },
            ],
        },
        playgroupJubileehills: {
            about: [
                { name: "Our Story", path: "/playgroup-jubileehills/our-story" },
                { name: "Mission & Vision", path: "/playgroup-jubileehills/mission-and-vision" },
                { name: "FKS Force", path: "/playgroup-jubileehills/fks-force" },
            ],
            learning: [
                { name: "Thematic Learning", path: "/playgroup-jubileehills/thematic-learning" },
                { name: "Learning Framework", path: "/playgroup-jubileehills/learning-framework" },
                { name: "Learning Activities", path: "/playgroup-jubileehills/learning-activities" },
            ],
            beyond: [
                { name: "Well Being", path: "/playgroup-jubileehills/well-being" },
                { name: "Play at FKS", path: "/playgroup-jubileehills/play-at-fks" },
                { name: "Events & Festivals", path: "/playgroup-jubileehills/events-and-festivals" },
            ],
            other: [
                { name: "Campus", path: "/playgroup-jubileehills/campus" },
                { name: "Connect", path: "/playgroup-jubileehills/connect" },
            ],
        },
        playgroupNarsingi: {
            about: [
                { name: "Our Story", path: "/playgroup-narsingi/our-story" },
                { name: "Mission & Vision", path: "/playgroup-narsingi/mission-and-vision" },
                { name: "FKS Force", path: "/playgroup-narsingi/fks-force" },
            ],
            learning: [
                { name: "Thematic Learning", path: "/playgroup-narsingi/thematic-learning" },
                { name: "Learning Framework", path: "/playgroup-narsingi/learning-framework" },
                { name: "Learning Activities", path: "/playgroup-narsingi/learning-activities" },
            ],
            beyond: [
                { name: "Well Being", path: "/playgroup-narsingi/well-being" },
                { name: "Play at FKS", path: "/playgroup-narsingi/play-at-fks" },
                { name: "Events & Festivals", path: "/playgroup-narsingi/events-and-festivals" },
            ],
            other: [
                { name: "Campus", path: "/playgroup-narsingi/campus" },
                { name: "Connect", path: "/playgroup-narsingi/connect" },
            ],
        },
    };

    return (
        <div className="min-h-screen px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
                    <p className="text-muted-foreground text-lg">
                        Find all pages on our website
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Pages */}
                    <div className="bg-card border rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
                        <ul className="space-y-2">
                            {sitemapStructure.main.map((page) => (
                                <li key={page.path}>
                                    <Link
                                        href={page.path}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Campus */}
                    <div className="bg-card border rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Main Campus</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">About</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.mainCampus.about.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Learning</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.mainCampus.learning.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Beyond</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.mainCampus.beyond.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Other</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.mainCampus.other.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Playgroup Jubilee Hills */}
                    <div className="bg-card border rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Playgroup Jubilee Hills</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">About</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupJubileehills.about.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Learning</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupJubileehills.learning.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Beyond</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupJubileehills.beyond.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Other</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupJubileehills.other.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Playgroup Narsingi */}
                    <div className="bg-card border rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Playgroup Narsingi</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">About</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupNarsingi.about.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Learning</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupNarsingi.learning.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Beyond</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupNarsingi.beyond.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-primary">Other</h3>
                                <ul className="space-y-1">
                                    {sitemapStructure.playgroupNarsingi.other.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                href={page.path}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="text-primary hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
