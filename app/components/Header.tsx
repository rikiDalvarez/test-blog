import React, { useContext } from 'react'

import Link from "next/link"

const categories = [{ name: "React", slug: "React" }, { name: "Web development", slug: "web-dev" }]

function Header() {
	return (
		<div className="continer mx-auto px-10 mb-8 text-lime-700">
			<div className=" border-b w-full inline-block border-blue-400 py-8">
				<div className="md:floar-left block">
					<Link href="/">
						<h1 className="cursor-pointer font-bold text-4xl text-Black">
							Plantio
						</h1>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category) => (
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