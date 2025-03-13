"use client"

import { useState } from "react"
import { FileImage, FileText, FileVideo, Mic, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function CreatePage() {
  const [privacy, setPrivacy] = useState("public")
  const [allowComments, setAllowComments] = useState(true)

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <p className="text-muted-foreground">Share your thoughts, photos, videos, or audio with the world</p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="text">
              <FileText className="mr-2 h-4 w-4" />
              Text
            </TabsTrigger>
            <TabsTrigger value="image">
              <FileImage className="mr-2 h-4 w-4" />
              Image
            </TabsTrigger>
            <TabsTrigger value="video">
              <FileVideo className="mr-2 h-4 w-4" />
              Video
            </TabsTrigger>
            <TabsTrigger value="audio">
              <Mic className="mr-2 h-4 w-4" />
              Audio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text">
            <Card>
              <CardHeader>
                <CardTitle>Create Text Post</CardTitle>
                <CardDescription>Share your thoughts, stories, or ideas in a text post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a title for your post" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" placeholder="Write your post content here..." className="min-h-[200px]" />
                </div>
                <PostSettings
                  privacy={privacy}
                  setPrivacy={setPrivacy}
                  allowComments={allowComments}
                  setAllowComments={setAllowComments}
                />
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Publish Post</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="image">
            <Card>
              <CardHeader>
                <CardTitle>Create Image Post</CardTitle>
                <CardDescription>Share your photos, artwork, or other images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image-title">Title</Label>
                  <Input id="image-title" placeholder="Enter a title for your post" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image-description">Description</Label>
                  <Textarea id="image-description" placeholder="Describe your images..." className="min-h-[100px]" />
                </div>
                <div className="space-y-2">
                  <Label>Upload Images</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                      </div>
                      <input id="image-upload" type="file" className="hidden" multiple />
                    </label>
                  </div>
                </div>
                <PostSettings
                  privacy={privacy}
                  setPrivacy={setPrivacy}
                  allowComments={allowComments}
                  setAllowComments={setAllowComments}
                />
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Publish Post</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle>Create Video Post</CardTitle>
                <CardDescription>Share your videos, clips, or recordings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title">Title</Label>
                  <Input id="video-title" placeholder="Enter a title for your video" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-description">Description</Label>
                  <Textarea id="video-description" placeholder="Describe your video..." className="min-h-[100px]" />
                </div>
                <div className="space-y-2">
                  <Label>Upload Video</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="video-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">MP4, MOV, AVI up to 100MB</p>
                      </div>
                      <input id="video-upload" type="file" className="hidden" accept="video/*" />
                    </label>
                  </div>
                </div>
                <PostSettings
                  privacy={privacy}
                  setPrivacy={setPrivacy}
                  allowComments={allowComments}
                  setAllowComments={setAllowComments}
                />
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Publish Post</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="audio">
            <Card>
              <CardHeader>
                <CardTitle>Create Audio Post</CardTitle>
                <CardDescription>Share your audio recordings, podcasts, or music</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="audio-title">Title</Label>
                  <Input id="audio-title" placeholder="Enter a title for your audio" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audio-description">Description</Label>
                  <Textarea id="audio-description" placeholder="Describe your audio..." className="min-h-[100px]" />
                </div>
                <div className="space-y-2">
                  <Label>Upload Audio</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="audio-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">MP3, WAV, M4A up to 50MB</p>
                      </div>
                      <input id="audio-upload" type="file" className="hidden" accept="audio/*" />
                    </label>
                  </div>
                </div>
                <PostSettings
                  privacy={privacy}
                  setPrivacy={setPrivacy}
                  allowComments={allowComments}
                  setAllowComments={setAllowComments}
                />
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Publish Post</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function PostSettings({
  privacy,
  setPrivacy,
  allowComments,
  setAllowComments,
}: {
  privacy: string
  setPrivacy: (value: string) => void
  allowComments: boolean
  setAllowComments: (value: boolean) => void
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="art">Art</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <Input id="tags" placeholder="Enter tags separated by commas" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="privacy">Privacy</Label>
        <Select value={privacy} onValueChange={setPrivacy}>
          <SelectTrigger id="privacy">
            <SelectValue placeholder="Select privacy setting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public - Anyone can see</SelectItem>
            <SelectItem value="friends">Friends Only - Only followers can see</SelectItem>
            <SelectItem value="private">Private - Only you can see</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="comments" checked={allowComments} onCheckedChange={setAllowComments} />
        <Label htmlFor="comments">Allow comments</Label>
      </div>
    </div>
  )
}

