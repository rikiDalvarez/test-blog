import React, { useState, useEffect } from 'react'
import { getCategories, getRecentPosts } from '../services'
import Link from 'next/link'

function Categories() {
	const [sameCategories, setCategories] = useState([]);

	useEffect(() => {
		getCategories()
			.then((newCategories) => setCategories(newCategories))
	}, [])

	console.log({ sameCategories })
	return (
		<div>{sameCategories.map((categories => (
			<div key={categories.name}> {categories.name} </div>)))}</div>
	)
}

export default Categories