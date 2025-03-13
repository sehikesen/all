"use client"

import { useState } from "react"
import { Camera, Mail, MapPin, PenSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UserPosts } from "@/components/user-posts"
import { UserFollowers } from "@/components/user-followers"
import { UserFollowing } from "@/components/user-following"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: "Alex Johnson",
    username: "alexj",
    bio: "Photographer and travel enthusiast. Exploring the world one photo at a time.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    website: "https://alexjohnson.com",
    avatar: "/placeholder.svg?height=128&width=128",
    coverPhoto: "/placeholder.svg?height=300&width=1200",
    followers: 1234,
    following: 567,
    posts: 89,
  }

  return (
    <div className="container py-10">
      <div className="relative mb-8">
        <div className="h-48 w-full overflow-hidden rounded-t-lg md:h-64">
          <img src={user.coverPhoto || "/placeholder.svg"} alt="Cover" className="w-full object-cover" />
        </div>
        <div className="absolute left-4 top-32 md:left-8 md:top-48">
          <div className="relative">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="h-24 w-24 rounded-full border-4 border-background bg-background md:h-32 md:w-32"
            />
            <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-background">
              <Camera className="h-4 w-4" />
              <span className="sr-only">Change avatar</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>@{user.username}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsEditing(!isEditing)}>
                  <PenSquare className="h-4 w-4" />
                  <span className="sr-only">Edit Profile</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue={user.username} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" defaultValue={user.bio} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue={user.location} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue={user.website} />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <p className="text-sm">{user.bio}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{user.email}</span>
                  </div>
                  {user.website && (
                    <div className="text-sm text-muted-foreground">
                      <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {user.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                </>
              )}
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <div className="flex justify-between w-full text-center">
                <div>
                  <p className="text-lg font-bold">{user.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{user.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{user.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <UserPosts />
            </TabsContent>
            <TabsContent value="followers">
              <UserFollowers />
            </TabsContent>
            <TabsContent value="following">
              <UserFollowing />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

