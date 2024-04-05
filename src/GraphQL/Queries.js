import { gql } from '@apollo/client'

export const LOAD_ALL_TASKS = gql`
    query {
        tasks(input: {}) {
            name
            tags
            dueDate
            pointEstimate
            assignee {
                avatar
            }
            status
        }
    }
`
export const LOAD_USER_OPTIONS = gql`
    query {
        users {
            avatar
            fullName
            id
        }
    }
`