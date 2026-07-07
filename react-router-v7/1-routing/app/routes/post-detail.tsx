import React from 'react'
import type { Route } from './+types/post-detail'

export default function PostDetailPage({ params }: Route.ComponentProps) {
    return (
        <div>PostDetailPage - {params.id}</div>
    )
}
