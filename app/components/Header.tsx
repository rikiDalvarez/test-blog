import React, { useContext } from 'react'

import Link from "next/link"

const categories = [{ name: "React", slug: "React" }, { name: "Web development", slug: "web-dev" }]

function Header() {
	return (
		<div className="continer mx-auto px-10 mb-8">
			<div className=" border-b w-full inline-block border-blue-400 py-8">
				<div className="md:floar-left block">
					<Link href="/">
						<span className="cursor-pointer font-bold text-4xl text-white">
							GRAPHCMS
						</span>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>Header
		</div>
	)
}

export default Header