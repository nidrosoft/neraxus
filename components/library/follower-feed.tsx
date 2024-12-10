"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  date: string;
}

const posts: Post[] = [
  {
    id: "1",
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      username: "@sarahw"
    },
    content: "Just created this amazing mountain landscape using Neraxus AI!",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    likes: 124,
    comments: 8,
    date: "2 hours ago"
  },
  {
    id: "2",
    user: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      username: "@alexc"
    },
    content: "Check out this ocean sunset generated by AI. The colors are incredible!",
    image: "https://images.unsplash.com/photo-1682687221038-404670f01d03",
    likes: 89,
    comments: 5,
    date: "4 hours ago"
  }
];

export function FollowerFeed() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={post.user.avatar} alt={post.user.name} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{post.user.name}</h3>
                  <p className="text-sm text-muted-foreground">{post.user.username}</p>
                </div>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <p className="mt-2">{post.content}</p>
              {post.image && (
                <div className="mt-3 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className="mt-4 flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-rose-500">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}