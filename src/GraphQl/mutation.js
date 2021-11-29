import {useQuery, gql} from '@apollo/client';

export const CREATE_POST = gql`
	mutation createPost($title:String, $description: String){
		createPost(post: {title:$title, description: $description}){
			id
			title
			description
		}
	}

`

export const DELETE_POST = gql`
	mutation deletePost($id: String){
		deletePost(id: $id)

	}
`

export const CREATE_USER = gql`
	mutation createUser($username:String, $password: String){
		createUser(user: {username:$username, password: $password}){
			username
			password
		}
	}

`
