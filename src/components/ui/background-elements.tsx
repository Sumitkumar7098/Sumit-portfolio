"use client"

import { useEffect, useRef } from "react"

export default function BackgroundElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth || 1
      canvas.height = window.innerHeight || 1
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid pattern
    const drawGrid = () => {
      const gridSize = 40
      ctx.strokeStyle = "rgba(50, 50, 50, 0.1)"
      ctx.lineWidth = 0.5

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
    }

    // Create geometric shapes
    const shapes: {
      x: number
      y: number
      size: number
      type: "circle" | "square" | "triangle"
      rotation: number
      color: string
      speed: number
    }[] = []

    const createShapes = () => {
      // Reduce the number of shapes for better performance
      const numShapes = Math.floor(canvas.width / 500)

      for (let i = 0; i < numShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 20, // Smaller shapes
          type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as any,
          rotation: Math.random() * Math.PI * 2,
          color: `rgba(34, 197, 94, ${Math.random() * 0.04 + 0.01})`, // More subtle color
          speed: Math.random() * 0.1 + 0.05, // Slower animation
        })
      }
    }

    const drawShapes = () => {
      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.fillStyle = shape.color

        switch (shape.type) {
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, shape.size, 0, Math.PI * 2)
            ctx.fill()
            break
          case "square":
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
            break
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(shape.size / 2, shape.size / 2)
            ctx.lineTo(-shape.size / 2, shape.size / 2)
            ctx.closePath()
            ctx.fill()
            break
        }

        ctx.restore()

        // Update rotation
        shape.rotation += shape.speed / 100
      })
    }

    const addNoiseTexture = () => {
      // Check if canvas has valid dimensions before proceeding
      if (!canvas || !ctx || canvas.width <= 0 || canvas.height <= 0) return

      // Apply noise less frequently for better performance
      if (Math.random() > 0.7) {
        try {
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data

          // Apply noise to fewer pixels
          for (let i = 0; i < data.length; i += 16) {
            const noise = Math.random() * 3
            data[i] = data[i] + noise // red
            data[i + 1] = data[i + 1] + noise // green
            data[i + 2] = data[i + 2] + noise // blue
          }

          ctx.putImageData(imageData, 0, 0)
        } catch (error) {
          console.error("Error applying noise texture:", error)
        }
      }
    }

    // Draw accent lines
    const drawAccentLines = () => {
      const numLines = 3

      for (let i = 0; i < numLines; i++) {
        const y = (canvas.height / (numLines + 1)) * (i + 1)

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        const gradient = ctx.createLinearGradient(0, y, canvas.width, y)
        gradient.addColorStop(0, "rgba(34, 197, 94, 0)")
        gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.05)")
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      drawShapes()
      drawAccentLines()
      addNoiseTexture()
      requestAnimationFrame(animate)
    }

    createShapes()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70" />
}
