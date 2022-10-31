import React from 'react'

function PostCard({post}: any) {
	return (
		<div>
			{post.title}
			{post.excerpt}
		</div>
	)
}

export default PostCard