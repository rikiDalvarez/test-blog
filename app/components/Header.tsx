import React, { useContext, useState, useEffect } from 'react'

import Link from "next/link"

import { getCategories, getRecentPosts } from '../services'


function Header() {
	const [allCategories, setCategories] = useState([]);

	useEffect(() => {
		getCategories()
			.then((newCategories) => setCategories(newCategories))
	}, [])

	return (
		<div className="continer mx-auto px-10 mb-8 text-lime-700">
			<div className=" border-b w-full inline-block border-orange-600 py-8">
				<div className="md:floar-left block">
					<Link href="/">
						<h1 className="cursor-pointer font-bold text-4xl text-Black">
							Plantio
						</h1>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{allCategories.map((category) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<h1 className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
								{category.name}
							</h1>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header