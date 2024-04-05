import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
    mutation CreateTask($input: CreateTaskInput!) {
        createTask(
            asigneeId: $asigneeId
            dueDate: $dueDate
            name: $name
            pointEstimate: $pointEstimate
            status: $status
            tags: $tags
        ) {
        id
        name
        status
        dueDate
        pointEstimate
        tags
        }
    }
`