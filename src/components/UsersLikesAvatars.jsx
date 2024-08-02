"use client";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function UsersLikesAvatars({ likes }) {
  return (
    <AvatarGroup isBordered max={2} size="sm">
      {likes &&
        likes.map((l) => (
          <Avatar
            src={
              l.user.profile.image &&
              `${process.env.REACT_APP_API_URL}/images/${l.user.profile.image}`
            }
            size="sm"
            key={l._id}
          />
        ))}
    </AvatarGroup>
  );
}
