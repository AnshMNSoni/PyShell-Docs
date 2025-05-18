"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

type TypewriterEffectProps = {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className, cursorClassName }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const type = () => {
      if (isDeleting) {
        // Deleting text
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // Typing text
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If completed typing the word
      if (!isDeleting && currentText === word) {
        // Pause at the end of the word
        setTypingSpeed(2000)
        setIsDeleting(true)
      }
      // If deleted the word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
        setTypingSpeed(500) // Pause before typing next word
      }
    }

    const timer = setTimeout(type, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <span>
        {currentText}
        <span className={cn("animate-blink", cursorClassName)}>|</span>
      </span>
    </div>
  )
}
