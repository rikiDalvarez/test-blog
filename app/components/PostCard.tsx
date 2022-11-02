import React from 'react'
import momen from "moment";
import Link from "next/link"

function PostCard({ post }: any) {
	console.log(post)
	return (
		<div className=" bg-gray-400 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
			<div className="relative overflow-hidden shadow-md pb-80 mb-6">
				<img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg">
				</img>
			</div>

		</div>
	)
}

export default PostCard