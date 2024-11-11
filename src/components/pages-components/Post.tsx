"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Facebook, Instagram, Linkedin, Twitter, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"

function Post() {
  const [date, setDate] = useState<Date>()
  const [postContent, setPostContent] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    facebook: false,
    twitter: false,
    linkedin: false
  })

  const socialPlatforms = [
    { name: 'instagram', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
    { name: 'facebook', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { name: 'twitter', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
    { name: 'linkedin', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' }
  ]

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform as keyof typeof selectedPlatforms]
    }))
  }

  return (
    <div className='w-full h-screen max-w-3xl mx-auto p-6 flex justify-center items-center'>
      <Card>
        <CardContent className="p-6">
          {/* Post Content */}
          <Textarea 
            placeholder="What would you like to share?" 
            className="min-h-[150px] mb-6"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />

          {/* Social Media Platforms */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Share to:</h3>
            <div className="flex flex-wrap gap-4">
              {socialPlatforms.map((platform) => (
                <div key={platform.name} className="flex items-center space-x-2">
                  <Switch
                    checked={selectedPlatforms[platform.name as keyof typeof selectedPlatforms]}
                    onCheckedChange={() => handlePlatformToggle(platform.name)}
                  />
                  <div className="flex items-center gap-1">
                    {platform.icon}
                    <span className="text-sm">{platform.label}</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Add Platform
              </Button>
            </div>
          </div>

          {/* Schedule DateTime */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Schedule:</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Schedule for later"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Save as Draft</Button>
            <Button>
              {date ? 'Schedule Post' : 'Post Now'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Post