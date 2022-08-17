export interface Ipost {
	postId: string,
	creator: string,
	title: string,
	category: string,
	content: string
}

export interface PostList {
	posts: Ipost[],
}