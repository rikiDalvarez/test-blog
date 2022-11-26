import React, { useState, useEffect } from 'react'
import { getCategories, getRecentPosts } from '../services'
import Link from 'next/link'

function Categories() {
	const [sameCategories, setCategories] = useState([]);

	useEffect(() => {
		getCategories()
			.then((newCategories) => setCategories(newCategories))
	}, [])

	return (
		<div className="bg-orange-100 shadow-lg rounded-lg p-8 mb-8 pb-12">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4 border-orange-600">
				Categories
			</h3>
			{sameCategories.map((category) => (
				<Link key={category.slug} href={`/category/${category.slug}`}>
					<span className="cursor-pointer block pb-3 mb-3">
						{category.name}
					</span>
				</Link>
			))}
		</div>
	)
}

export default Categories