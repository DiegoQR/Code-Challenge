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
