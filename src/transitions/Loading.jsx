import { useEffect, useState, useRef, useCallback } from 'react';
import './Loading.css';
import Logo from './Logo.jsx';

const useTickerEffect = (text) => {
    const tickerRef = useRef(null);
    const [isDone, setIsDone] = useState(false);
    const animationRef = useRef({
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split(''),
        cycleCount: 4,
        cycleCurrent: 0,
        letterCurrent: 0,
        letters: [],
        animationFrameId: null
    });

    const getChar = useCallback(() => {
        const chars = animationRef.current.chars;
        return chars[Math.floor(Math.random() * chars.length)];
    }, []);

    const loop = useCallback(() => {
        const { current: anim } = animationRef;
        
        if (!tickerRef.current) return;

        anim.letters = Array.from(tickerRef.current.children);

        let doneAnimating = false;

        anim.letters.forEach((elem, index) => {
            if (index >= anim.letterCurrent) {
                if (elem.textContent !== ' ') {
                    elem.textContent = getChar();
                    elem.style.opacity = Math.random().toString();
                }
            }
        });

        if (anim.cycleCurrent < anim.cycleCount) {
            anim.cycleCurrent++;
        } else if (anim.letterCurrent < anim.letters.length) {
            const currLetter = anim.letters[anim.letterCurrent];
            anim.cycleCurrent = 0;
            if (currLetter) { 
                currLetter.textContent = currLetter.dataset.orig;
                currLetter.style.opacity = '1';
                currLetter.classList.add('done');
                currLetter.style.color = '#00FF00';
            }
            anim.letterCurrent++;
        } else {
            doneAnimating = true;
            setIsDone(true);
            return;
        }

        if (!doneAnimating) {
            anim.animationFrameId = requestAnimationFrame(loop);
        }
    }, [getChar]);

    useEffect(() => {
        const { current: anim } = animationRef;
        
        if (tickerRef.current) {
            tickerRef.current.innerHTML = text.split('').map(char =>
                `<span data-orig="${char}" style="color: #00FF00">${char === ' ' ? '&nbsp;' : '-'}</span>`
            ).join('');

            anim.letters = Array.from(tickerRef.current.children);
            loop();
        }

        return () => {
            if (anim.animationFrameId) {
                cancelAnimationFrame(anim.animationFrameId);
            }
        };
    }, [text, loop]);

    return [tickerRef, isDone];
};

const Loading = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [tickerRef, tickerDone] = useTickerEffect("LOADING...");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        if (onFinish) onFinish();
                        setIsVisible(false);
                    }, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div className="loading-screen">
            {/* Fundo animado */}
            <div className="loading-background"></div>
            
            {/* Conteúdo centralizado */}
            <div className="loading-content">
                <div className="logo-crow">
                    <Logo color="#6F4E37" width="200px" height="250px" animated={true} />
                </div>
                
                <div className="loading-text">
                    <div className="word" ref={tickerRef}></div>
                    <div className="progress-container">
                        <p className="loading-percent">{progress}%</p>
                        <div className="loading-bar-container">
                            <div 
                                className="loading-bar" 
                                style={{ width: `${progress}%` }}
                            >
                                <div className="loading-bar-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="loading-footer">
                Gustavo A. G. de Brito @ 2025
            </div>
        </div>
    );
};

export default Loading;