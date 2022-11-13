import React, { useState, useEffect } from 'react'
import { getSameCategory, getRecentPosts } from '../services'

function Categories({ categories, slug }) {
	const [sameCategoryPost, setCategories] = useState([]);

	useEffect(() => {
		if (slug) {
			getSameCategory(categories, slug)
				.then((result) => setCategories(result))
		} else {
			getRecentPosts()
				.then((result) => setCategories(result))
		}
	}, [slug])

	console.log({ sameCategoryPost })



	return (
		<div>{sameCategoryPost.map((post => (
			<div> {post.title}</div>)))}</div>
	)
}

export default Categories