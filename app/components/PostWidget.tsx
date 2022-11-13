import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'



function PostWidget({ categories, slug }) {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug)
				.then((result) => setRelatedPosts(result))
		} else {
			getRecentPosts()
				.then((result) => setRelatedPosts(result))
		}
	}, [slug])

	console.log({ relatedPosts })


	return (
		<div>

			{relatedPosts.map((post => (<div> {post.title}</div>)))}
		</div>
	)
}

export default PostWidget