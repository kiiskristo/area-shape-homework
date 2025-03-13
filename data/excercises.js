import React from 'react';

// This file contains all the exercise data
export const allExercises = [
    // Parallelogram Exercises
    {
        id: 'rect1',
        type: 'rectangle',
        title: 'Exercise 1',
        dimensions: { width: 120, height: 60 },
        solution: 7200,
        svg: (
            <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow1" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <rect x="40" y="40" width="120" height="60" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="30" x2="160" y2="30" stroke="red" strokeWidth="1" markerStart="url(#arrow1)" markerEnd="url(#arrow1)" />
                <text x="100" y="25" fontSize="12" textAnchor="middle">120</text>
                <line x1="30" y1="40" x2="30" y2="100" stroke="red" strokeWidth="1" markerStart="url(#arrow1)" markerEnd="url(#arrow1)" />
                <text x="20" y="70" fontSize="12" textAnchor="middle" transform="rotate(-90,20,70)">60</text>
            </svg>
        )
    },
    {
        id: 'rect2',
        type: 'rectangle',
        title: 'Exercise 2',
        dimensions: { width: 150, height: 80 },
        solution: 12000,
        svg: (
            <svg viewBox="0 0 250 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="blue" />
                    </marker>
                </defs>
                <rect x="50" y="50" width="150" height="80" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="40" x2="200" y2="40" stroke="blue" strokeWidth="1" markerStart="url(#arrow2)" markerEnd="url(#arrow2)" />
                <text x="125" y="35" fontSize="12" textAnchor="middle">150</text>
                <line x1="40" y1="50" x2="40" y2="130" stroke="blue" strokeWidth="1" markerStart="url(#arrow2)" markerEnd="url(#arrow2)" />
                <text x="30" y="90" fontSize="12" textAnchor="middle" transform="rotate(-90,30,90)">80</text>
            </svg>
        )
    },
    {
        id: 'rect3',
        type: 'rectangle',
        title: 'Exercise 3',
        dimensions: { width: 100, height: 70 },
        solution: 7000,
        svg: (
            <svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="green" />
                    </marker>
                </defs>
                <rect x="60" y="40" width="100" height="70" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="30" x2="160" y2="30" stroke="green" strokeWidth="1" markerStart="url(#arrow3)" markerEnd="url(#arrow3)" />
                <text x="110" y="25" fontSize="12" textAnchor="middle">100</text>
                <line x1="50" y1="40" x2="50" y2="110" stroke="green" strokeWidth="1" markerStart="url(#arrow3)" markerEnd="url(#arrow3)" />
                <text x="40" y="75" fontSize="12" textAnchor="middle" transform="rotate(-90,40,75)">70</text>
            </svg>
        )
    },
    {
        id: 'rect4',
        type: 'rectangle',
        title: 'Exercise 4',
        dimensions: { width: 180, height: 90 },
        solution: 16200,
        svg: (
            <svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow4" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="purple" />
                    </marker>
                </defs>
                <rect x="40" y="40" width="180" height="90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="30" x2="220" y2="30" stroke="purple" strokeWidth="1" markerStart="url(#arrow4)" markerEnd="url(#arrow4)" />
                <text x="130" y="25" fontSize="12" textAnchor="middle">180</text>
                <line x1="30" y1="40" x2="30" y2="130" stroke="purple" strokeWidth="1" markerStart="url(#arrow4)" markerEnd="url(#arrow4)" />
                <text x="20" y="85" fontSize="12" textAnchor="middle" transform="rotate(-90,20,85)">90</text>
            </svg>
        )
    },
    {
        id: 'rect5',
        type: 'rectangle',
        title: 'Exercise 5',
        dimensions: { width: 140, height: 60 },
        solution: 9380,
        svg: (
            <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow5" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="orange" />
                    </marker>
                </defs>
                <rect x="40" y="30" width="140" height="60" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="20" x2="160" y2="20" stroke="orange" strokeWidth="1" markerStart="url(#arrow5)" markerEnd="url(#arrow5)" />
                <text x="110" y="15" fontSize="12" textAnchor="middle">140</text>
                <line x1="30" y1="30" x2="30" y2="90" stroke="orange" strokeWidth="1" markerStart="url(#arrow5)" markerEnd="url(#arrow5)" />
                <text x="0" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,0,60)">67</text>
            </svg>
        )
    },
    {
        id: 'rect6',
        type: 'rectangle',
        title: 'Exercise 6',
        dimensions: { width: 110, height: 50 },
        solution: 5500,
        svg: (
            <svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow6" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="brown" />
                    </marker>
                </defs>
                <rect x="60" y="40" width="110" height="50" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="30" x2="170" y2="30" stroke="brown" strokeWidth="1" markerStart="url(#arrow6)" markerEnd="url(#arrow6)" />
                <text x="115" y="25" fontSize="12" textAnchor="middle">110</text>
                <line x1="50" y1="40" x2="50" y2="90" stroke="brown" strokeWidth="1" markerStart="url(#arrow6)" markerEnd="url(#arrow6)" />
                <text x="40" y="65" fontSize="12" textAnchor="middle" transform="rotate(-90,40,65)">50</text>
            </svg>
        )
    },
    {
        id: 'rect7',
        type: 'rectangle',
        title: 'Exercise 7',
        dimensions: { width: 15, height: 7 },
        solution: 105,
        svg: (
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow7" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="teal" />
                    </marker>
                </defs>
                <rect x="40" y="40" width="130" height="80" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="30" x2="170" y2="30" stroke="teal" strokeWidth="1" markerStart="url(#arrow7)" markerEnd="url(#arrow7)" />
                <text x="105" y="25" fontSize="12" textAnchor="middle">15</text>
                <line x1="30" y1="40" x2="30" y2="120" stroke="teal" strokeWidth="1" markerStart="url(#arrow7)" markerEnd="url(#arrow7)" />
                <text x="20" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,20,80)">7</text>
            </svg>
        )
    },
    // Triangle Exercises
    {
        id: 'tri1',
        type: 'triangle',
        title: 'Exercise 8',
        dimensions: { base: 24, height: 12 },
        solution: 144,
        svg: (
            <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow1" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="green" />
                    </marker>
                </defs>
                <polygon points="40,100 160,100 40,40" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="40" x2="40" y2="100" stroke="green" strokeWidth="1" markerStart="url(#tArrow1)" markerEnd="url(#tArrow1)" />
                <text x="30" y="70" fontSize="12" textAnchor="middle" transform="rotate(-90,30,70)">12</text>
                <line x1="40" y1="100" x2="160" y2="100" stroke="green" strokeWidth="1" markerStart="url(#tArrow1)" markerEnd="url(#tArrow1)" />
                <text x="100" y="115" fontSize="12" textAnchor="middle">24</text>
            </svg>
        )
    },
    {
        id: 'tri2',
        type: 'triangle',
        title: 'Exercise 9',
        dimensions: { base: 18, height: 9 },
        solution: 81,
        svg: (
            <svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="blue" />
                    </marker>
                </defs>
                <polygon points="30,110 150,110 30,50" fill="none" stroke="black" strokeWidth="2" />
                <line x1="30" y1="50" x2="30" y2="110" stroke="blue" strokeWidth="1" markerStart="url(#tArrow2)" markerEnd="url(#tArrow2)" />
                <text x="20" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,20,80)">9</text>
                <line x1="30" y1="110" x2="150" y2="110" stroke="blue" strokeWidth="1" markerStart="url(#tArrow2)" markerEnd="url(#tArrow2)" />
                <text x="90" y="125" fontSize="12" textAnchor="middle">18</text>
            </svg>
        )
    },
    {
        id: 'tri3',
        type: 'triangle',
        title: 'Exercise 10',
        dimensions: { base: 30, height: 15 },
        solution: 225,
        svg: (
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <polygon points="50,120 170,120 50,70" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="70" x2="50" y2="120" stroke="red" strokeWidth="1" markerStart="url(#tArrow3)" markerEnd="url(#tArrow3)" />
                <text x="40" y="95" fontSize="12" textAnchor="middle" transform="rotate(-90,40,95)">15</text>
                <line x1="50" y1="120" x2="170" y2="120" stroke="red" strokeWidth="1" markerStart="url(#tArrow3)" markerEnd="url(#tArrow3)" />
                <text x="110" y="135" fontSize="12" textAnchor="middle">30</text>
            </svg>
        )
    },
    {
        id: 'tri4',
        type: 'triangle',
        title: 'Exercise 11',
        dimensions: { base: 25, height: 10 },
        solution: 125,
        svg: (
            <svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow4" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="purple" />
                    </marker>
                </defs>
                <polygon points="40,100 160,100 40,60" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="60" x2="40" y2="100" stroke="purple" strokeWidth="1" markerStart="url(#tArrow4)" markerEnd="url(#tArrow4)" />
                <text x="30" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,30,80)">10</text>
                <line x1="40" y1="100" x2="160" y2="100" stroke="purple" strokeWidth="1" markerStart="url(#tArrow4)" markerEnd="url(#tArrow4)" />
                <text x="100" y="115" fontSize="12" textAnchor="middle">25</text>
            </svg>
        )
    },
    {
        id: 'tri5',
        type: 'triangle',
        title: 'Exercise 12',
        dimensions: { base: 20, height: 8 },
        solution: 80,
        svg: (
            <svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow5" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="orange" />
                    </marker>
                </defs>
                <polygon points="30,130 130,130 30,80" fill="none" stroke="black" strokeWidth="2" />
                <line x1="30" y1="80" x2="30" y2="130" stroke="orange" strokeWidth="1" markerStart="url(#tArrow5)" markerEnd="url(#tArrow5)" />
                <text x="20" y="105" fontSize="12" textAnchor="middle" transform="rotate(-90,20,105)">8</text>
                <line x1="30" y1="130" x2="130" y2="130" stroke="orange" strokeWidth="1" markerStart="url(#tArrow5)" markerEnd="url(#tArrow5)" />
                <text x="80" y="145" fontSize="12" textAnchor="middle">20</text>
            </svg>
        )
    },
    {
        id: 'tri6',
        type: 'triangle',
        title: 'Exercise 13',
        dimensions: { base: 16, height: 9 },
        solution: 72,
        svg: (
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow6" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="brown" />
                    </marker>
                </defs>
                <polygon points="60,120 180,120 60,80" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="80" x2="60" y2="120" stroke="brown" strokeWidth="1" markerStart="url(#tArrow6)" markerEnd="url(#tArrow6)" />
                <text x="50" y="100" fontSize="12" textAnchor="middle" transform="rotate(-90,50,100)">9</text>
                <line x1="60" y1="120" x2="180" y2="120" stroke="brown" strokeWidth="1" markerStart="url(#tArrow6)" markerEnd="url(#tArrow6)" />
                <text x="120" y="135" fontSize="12" textAnchor="middle">16</text>
            </svg>
        )
    },
    {
        id: 'tri7',
        type: 'triangle',
        title: 'Exercise 14',
        dimensions: { base: 22, height: 11 },
        solution: 121,
        svg: (
            <svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="tArrow7" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="teal" />
                    </marker>
                </defs>
                <polygon points="40,110 140,110 40,60" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="60" x2="40" y2="110" stroke="teal" strokeWidth="1" markerStart="url(#tArrow7)" markerEnd="url(#tArrow7)" />
                <text x="30" y="85" fontSize="12" textAnchor="middle" transform="rotate(-90,30,85)">11</text>
                <line x1="40" y1="110" x2="140" y2="110" stroke="teal" strokeWidth="1" markerStart="url(#tArrow7)" markerEnd="url(#tArrow7)" />
                <text x="90" y="125" fontSize="12" textAnchor="middle">22</text>
            </svg>
        )
    },
    {
        id: 'para1',
        type: 'parallelogram',
        title: 'Exercise 1',
        dimensions: { base: 17, height: 9 },
        solution: 153,
        svg: (
            <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow1" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <polygon points="50,40 170,40 140,100 20,100" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="30" x2="170" y2="30" stroke="red" strokeWidth="1" markerStart="url(#pArrow1)" markerEnd="url(#pArrow1)" />
                <text x="110" y="25" fontSize="12" textAnchor="middle">17</text>
                <line x1="60" y1="40" x2="60" y2="100" stroke="red" strokeWidth="1" markerStart="url(#pArrow1)" markerEnd="url(#pArrow1)" />
                <text x="50" y="70" fontSize="12" textAnchor="middle" transform="rotate(-90,50,70)">9</text>
            </svg>
        )
    },
    {
        id: 'para2',
        type: 'parallelogram',
        title: 'Exercise 2',
        dimensions: { base: 20, height: 12 },
        solution: 240,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="blue" />
                    </marker>
                </defs>
                <polygon points="40,50 160,50 130,110 10,110" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="40" x2="160" y2="40" stroke="blue" strokeWidth="1" markerStart="url(#pArrow2)" markerEnd="url(#pArrow2)" />
                <text x="100" y="35" fontSize="12" textAnchor="middle">20</text>
                <line x1="50" y1="50" x2="50" y2="110" stroke="blue" strokeWidth="1" markerStart="url(#pArrow2)" markerEnd="url(#pArrow2)" />
                <text x="40" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,40,80)">12</text>
            </svg>
        )
    },
    {
        id: 'para3',
        type: 'parallelogram',
        title: 'Exercise 3',
        dimensions: { base: 15, height: 7 },
        solution: 105,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="green" />
                    </marker>
                </defs>
                <polygon points="60,30 180,30 150,90 30,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="20" x2="180" y2="20" stroke="green" strokeWidth="1" markerStart="url(#pArrow3)" markerEnd="url(#pArrow3)" />
                <text x="120" y="15" fontSize="12" textAnchor="middle">15</text>
                <line x1="70" y1="30" x2="70" y2="90" stroke="green" strokeWidth="1" markerStart="url(#pArrow3)" markerEnd="url(#pArrow3)" />
                <text x="60" y="60" fontSize="12" textAnchor="middle" transform="rotate(-90,60,60)">7</text>
            </svg>
        )
    },
    {
        id: 'para4',
        type: 'parallelogram',
        title: 'Exercise 4',
        dimensions: { base: 18, height: 8 },
        solution: 144,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow4" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="purple" />
                    </marker>
                </defs>
                <polygon points="30,60 150,60 130,100 10,100" fill="none" stroke="black" strokeWidth="2" />
                <line x1="30" y1="50" x2="150" y2="50" stroke="purple" strokeWidth="1" markerStart="url(#pArrow4)" markerEnd="url(#pArrow4)" />
                <text x="90" y="45" fontSize="12" textAnchor="middle">18</text>
                <line x1="40" y1="60" x2="40" y2="100" stroke="purple" strokeWidth="1" markerStart="url(#pArrow4)" markerEnd="url(#pArrow4)" />
                <text x="30" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,30,80)">8</text>
            </svg>
        )
    },
    {
        id: 'para5',
        type: 'parallelogram',
        title: 'Exercise 5',
        dimensions: { base: 24, height: 9 },
        solution: 216,
        svg: (
            <svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow5" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="orange" />
                    </marker>
                </defs>
                <polygon points="70,50 170,50 150,100 50,100" fill="none" stroke="black" strokeWidth="2" />
                <line x1="70" y1="40" x2="170" y2="40" stroke="orange" strokeWidth="1" markerStart="url(#pArrow5)" markerEnd="url(#pArrow5)" />
                <text x="120" y="35" fontSize="12" textAnchor="middle">24</text>
                <line x1="80" y1="50" x2="80" y2="100" stroke="orange" strokeWidth="1" markerStart="url(#pArrow5)" markerEnd="url(#pArrow5)" />
                <text x="70" y="75" fontSize="12" textAnchor="middle" transform="rotate(-90,70,75)">9</text>
            </svg>
        )
    },
    {
        id: 'para6',
        type: 'parallelogram',
        title: 'Exercise 6',
        dimensions: { base: 22, height: 11 },
        solution: 242,
        svg: (
            <svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow6" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="brown" />
                    </marker>
                </defs>
                <polygon points="40,40 140,40 130,90 30,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="30" x2="140" y2="30" stroke="brown" strokeWidth="1" markerStart="url(#pArrow6)" markerEnd="url(#pArrow6)" />
                <text x="90" y="25" fontSize="12" textAnchor="middle">22</text>
                <line x1="30" y1="40" x2="30" y2="90" stroke="brown" strokeWidth="1" markerStart="url(#pArrow6)" markerEnd="url(#pArrow6)" />
                <text x="20" y="65" fontSize="12" textAnchor="middle" transform="rotate(-90,20,65)">11</text>
            </svg>
        )
    },
    {
        id: 'para7',
        type: 'parallelogram',
        title: 'Exercise 7',
        dimensions: { base: 13, height: 6 },
        solution: 78,
        svg: (
            <svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="pArrow7" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="teal" />
                    </marker>
                </defs>
                <polygon points="50,70 150,70 140,110 40,110" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="60" x2="150" y2="60" stroke="teal" strokeWidth="1" markerStart="url(#pArrow7)" markerEnd="url(#pArrow7)" />
                <text x="100" y="55" fontSize="12" textAnchor="middle">13</text>
                <line x1="60" y1="70" x2="60" y2="110" stroke="teal" strokeWidth="1" markerStart="url(#pArrow7)" markerEnd="url(#pArrow7)" />
                <text x="50" y="90" fontSize="12" textAnchor="middle" transform="rotate(-90,50,90)">6</text>
            </svg>
        )
    },

    // Trapezoid Exercises
    {
        id: 'trap1',
        type: 'trapezoid',
        title: 'Exercise 8',
        dimensions: { base1: 16, base2: 21, height: 9 },
        solution: 166.5,
        svg: (
            <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow1" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <polygon points="60,30 160,30 180,90 40,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="20" x2="160" y2="20" stroke="red" strokeWidth="1" markerStart="url(#zArrow1)" markerEnd="url(#zArrow1)" />
                <text x="110" y="15" fontSize="12" textAnchor="middle">16</text>
                <line x1="40" y1="100" x2="180" y2="100" stroke="red" strokeWidth="1" markerStart="url(#zArrow1)" markerEnd="url(#zArrow1)" />
                <text x="110" y="115" fontSize="12" textAnchor="middle">21</text>
                <line x1="80" y1="30" x2="80" y2="90" stroke="red" strokeWidth="1" markerStart="url(#zArrow1)" markerEnd="url(#zArrow1)" />
                <text x="70" y="60" fontSize="12" textAnchor="middle" transform="rotate(-90,70,60)">9</text>
            </svg>
        )
    },
    {
        id: 'trap2',
        type: 'trapezoid',
        title: 'Exercise 9',
        dimensions: { base1: 15, base2: 20, height: 8 },
        solution: 140,
        svg: (
            <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="blue" />
                    </marker>
                </defs>
                <polygon points="50,30 150,30 170,90 30,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="20" x2="150" y2="20" stroke="blue" strokeWidth="1" markerStart="url(#zArrow2)" markerEnd="url(#zArrow2)" />
                <text x="100" y="15" fontSize="12" textAnchor="middle">15</text>
                <line x1="30" y1="100" x2="170" y2="100" stroke="blue" strokeWidth="1" markerStart="url(#zArrow2)" markerEnd="url(#zArrow2)" />
                <text x="100" y="115" fontSize="12" textAnchor="middle">20</text>
                <line x1="70" y1="30" x2="70" y2="90" stroke="blue" strokeWidth="1" markerStart="url(#zArrow2)" markerEnd="url(#zArrow2)" />
                <text x="60" y="60" fontSize="12" textAnchor="middle" transform="rotate(-90,60,60)">8</text>
            </svg>
        )
    },
    {
        id: 'trap3',
        type: 'trapezoid',
        title: 'Exercise 10',
        dimensions: { base1: 12, base2: 9, height: 7 },
        solution: 73.5,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="green" />
                    </marker>
                </defs>
                <polygon points="40,30 140,30 130,90 50,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="40" y1="20" x2="140" y2="20" stroke="green" strokeWidth="1" markerStart="url(#zArrow3)" markerEnd="url(#zArrow3)" />
                <text x="90" y="15" fontSize="12" textAnchor="middle">12</text>
                <line x1="50" y1="100" x2="130" y2="100" stroke="green" strokeWidth="1" markerStart="url(#zArrow3)" markerEnd="url(#zArrow3)" />
                <text x="90" y="115" fontSize="12" textAnchor="middle">9</text>
                <line x1="60" y1="30" x2="60" y2="90" stroke="green" strokeWidth="1" markerStart="url(#zArrow3)" markerEnd="url(#zArrow3)" />
                <text x="50" y="60" fontSize="12" textAnchor="middle" transform="rotate(-90,50,60)">7</text>
            </svg>
        )
    },
    {
        id: 'trap4',
        type: 'trapezoid',
        title: 'Exercise 11',
        dimensions: { base1: 8, base2: 12, height: 10 },
        solution: 100,
        svg: (
            <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow4" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="purple" />
                    </marker>
                </defs>
                <polygon points="60,50 120,50 140,110 40,110" fill="none" stroke="black" strokeWidth="2" />
                <line x1="60" y1="40" x2="120" y2="40" stroke="purple" strokeWidth="1" markerStart="url(#zArrow4)" markerEnd="url(#zArrow4)" />
                <text x="90" y="35" fontSize="12" textAnchor="middle">8</text>
                <line x1="40" y1="120" x2="140" y2="120" stroke="purple" strokeWidth="1" markerStart="url(#zArrow4)" markerEnd="url(#zArrow4)" />
                <text x="90" y="135" fontSize="12" textAnchor="middle">12</text>
                <line x1="80" y1="50" x2="80" y2="110" stroke="purple" strokeWidth="1" markerStart="url(#zArrow4)" markerEnd="url(#zArrow4)" />
                <text x="70" y="80" fontSize="12" textAnchor="middle" transform="rotate(-90,70,80)">10</text>
            </svg>
        )
    },
    {
        id: 'trap5',
        type: 'trapezoid',
        title: 'Exercise 12',
        dimensions: { base1: 11, base2: 8, height: 6 },
        solution: 57,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow5" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="orange" />
                    </marker>
                </defs>
                <polygon points="80,40 160,40 150,100 90,100" fill="none" stroke="black" strokeWidth="2" />
                <line x1="80" y1="30" x2="160" y2="30" stroke="orange" strokeWidth="1" markerStart="url(#zArrow5)" markerEnd="url(#zArrow5)" />
                <text x="120" y="25" fontSize="12" textAnchor="middle">11</text>
                <line x1="90" y1="100" x2="150" y2="100" stroke="orange" strokeWidth="1" markerStart="url(#zArrow5)" markerEnd="url(#zArrow5)" />
                <text x="120" y="115" fontSize="12" textAnchor="middle">8</text>
                <line x1="100" y1="40" x2="100" y2="100" stroke="orange" strokeWidth="1" markerStart="url(#zArrow5)" markerEnd="url(#zArrow5)" />
                <text x="90" y="77" fontSize="12" textAnchor="middle" transform="rotate(-90,90,70)">6</text>
            </svg>
        )
    },
    {
        id: 'trap6',
        type: 'trapezoid',
        title: 'Exercise 13',
        dimensions: { base1: 9, base2: 13, height: 7 },
        solution: 77,
        svg: (
            <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow6" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="brown" />
                    </marker>
                </defs>
                <polygon points="30,30 110,30 140,90 20,90" fill="none" stroke="black" strokeWidth="2" />
                <line x1="30" y1="20" x2="110" y2="20" stroke="brown" strokeWidth="1" markerStart="url(#zArrow6)" markerEnd="url(#zArrow6)" />
                <text x="70" y="15" fontSize="12" textAnchor="middle">9</text>
                <line x1="20" y1="100" x2="140" y2="100" stroke="brown" strokeWidth="1" markerStart="url(#zArrow6)" markerEnd="url(#zArrow6)" />
                <text x="80" y="115" fontSize="12" textAnchor="middle">13</text>
                <line x1="50" y1="30" x2="50" y2="90" stroke="brown" strokeWidth="1" markerStart="url(#zArrow6)" markerEnd="url(#zArrow6)" />
                <text x="40" y="60" fontSize="12" textAnchor="middle" transform="rotate(-90,40,60)">7</text>
            </svg>
        )
    },
    {
        id: 'trap7',
        type: 'trapezoid',
        title: 'Exercise 14',
        dimensions: { base1: 10, base2: 8, height: 5 },
        solution: 45,
        svg: (
            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="zArrow7" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="teal" />
                    </marker>
                </defs>
                <polygon points="50,40 130,40 120,100 60,100" fill="none" stroke="black" strokeWidth="2" />
                <line x1="50" y1="30" x2="130" y2="30" stroke="teal" strokeWidth="1" markerStart="url(#zArrow7)" markerEnd="url(#zArrow7)" />
                <text x="90" y="25" fontSize="12" textAnchor="middle">10</text>
                <line x1="60" y1="100" x2="120" y2="100" stroke="teal" strokeWidth="1" markerStart="url(#zArrow7)" markerEnd="url(#zArrow7)" />
                <text x="90" y="115" fontSize="12" textAnchor="middle">8</text>
                <line x1="70" y1="40" x2="70" y2="100" stroke="teal" strokeWidth="1" markerStart="url(#zArrow7)" markerEnd="url(#zArrow7)" />
                <text x="60" y="70" fontSize="12" textAnchor="middle" transform="rotate(-90,60,70)">5</text>
            </svg>
        )
    }
]