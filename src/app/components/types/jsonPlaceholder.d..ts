namespace JsonPlaceholder {
    type Post = {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    type Photo = {
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string
    }
    type Comment = {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string,
    }
}
