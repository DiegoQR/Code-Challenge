import React, { useState } from 'react';
import { Group, Modal, TextInput, Combobox, useCombobox, Button, Stack, Avatar, Center, Loader, Text, Checkbox, MultiSelect, PillsInput } from '@mantine/core';
import { DateInput  } from '@mantine/dates';
import { IconSquareMinusFilled, IconUserFilled, IconTag } from '@tabler/icons-react'
import { LOAD_USER_OPTIONS } from '../GraphQL/Queries';
import { CREATE_TASK } from '../GraphQL/Mutations';
import { useMutation, useQuery } from '@apollo/client'
import SelectCombobox from './SelectCombobox';


const enumToValue = {
    "ZERO": "0 Points",
    "ONE": "1 Point",
    "TWO": "2 Points",
    "FOUR": "4 Points",
    "EIGHT": "8 Points",
    "NODE_JS": "NODE JS"
}

function CreateTaskModal({opened, onClose}){
    const [name, setName] = useState("")
    const [pointEstimate, setPointEstimate] = useState("")
    const [asignee, setAsignee] = useState("")
    const [tags, setTags] = useState([])
    const [dueDate, setDueDate] = useState("")

    const {error, loading, data} = useQuery(LOAD_USER_OPTIONS)
    const [createTask, { createError }] = useMutation(CREATE_TASK)

    async function addTask() {
        const data = await createTask({
            variables: {
                asigneeId: asignee.id,
                dueDate: dueDate.toISOString(),
                name: name,
                pointEstimate: pointEstimate,
                status: "TODO",
                tags: tags
            }
        })
        console.log('Tarea creada:', data.createTask)
        if (createError){
            console.log(createError)
        }
    }

    function getAsigneeOptions(){
        const estimatesOptions = [ "ZERO", "ONE", "TWO", "FOUR", "EIGHT"]
        return estimatesOptions.map((item) => (
            <Combobox.Option value={item} key={item}>
                <Group wrap='nowrap'>
                    <IconSquareMinusFilled />
                    {enumToValue[item]}
                </Group>
            </Combobox.Option>
        ))
    }

    function getUserOptions(){
        if (loading) return <Center><Loader color="red" /></Center>
        if (error) return <Text>Error: {error.message}</Text>
        const asigneeOptions = data.users
        return asigneeOptions.map((item) => (
            <Combobox.Option value={item} key={item.id}>
                <Group wrap='nowrap'>
                    <Avatar src={item.avatar} />
                    {item.fullName}
                </Group>
            </Combobox.Option>
        ))
    }
    const tagsOptions = [ "ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"]

    function showStates(){
        console.log(`name: ${name}`)
        console.log(`pointEstimate: ${pointEstimate}`)
        console.log(`asigneeId: ${asignee.id}`)
        console.log(`tags: ${tags}`)
        console.log(`dueDates: ${dueDate}`)
    }

    return (
        <>
            <Modal p={20} size={578} opened={opened} onClose={onClose} withCloseButton={false} styles={{content: { backgroundColor: '#393D41' }}}>
                <Stack>
                    <TextInput 
                        placeholder='Task Title' 
                        variant='unstyled' 
                        value={name} 
                        onChange={(event) => setName(event.currentTarget.value)}
                        style={{
                                input: { color: "white"}
                            }}
                    />
                    <Group wrap='nowrap'>
                        <SelectCombobox
                            options={getAsigneeOptions()}
                            setState={setPointEstimate}
                        >
                            <IconSquareMinusFilled />
                            {pointEstimate === "" ? "Estimate" : enumToValue[pointEstimate]}
                        </SelectCombobox>
                        <SelectCombobox
                            options={getUserOptions()}
                            setState={setAsignee}
                        >
                            {
                                !asignee ? (
                                    <> 
                                        <IconUserFilled />
                                        Asignee
                                    </>
                                ) : (
                                    <>
                                        <Avatar src={asignee.avatar} size={20}/>
                                        {asignee.fullName}
                                    </>
                                )
                            }
                        </SelectCombobox>
                        <MultiSelect
                            placeholder="Tags"
                            data={tagsOptions}
                            value={tags}
                            onChange={setTags}
                            styles={{
                                input: {
                                    backgroundColor: "#94979A1A",
                                    color: "#FFFFFF",
                                    border: "none"
                                }
                            }}
                        >

                        </MultiSelect>
                        <DateInput
                            placeholder="Due date"
                            value={dueDate}
                            onChange={setDueDate}
                            styles={{
                                input: {
                                    backgroundColor: "#94979A1A",
                                    color: "#FFFFFF",
                                    border: "none"
                                },
                                calendar: {
                                    backgroundColor: "#222528",
                                }
                            }}
                        />
                    </Group>
                    <Group justify="flex-end">
                        <Button variant='transparent' color='#FFFFFF' onClick={onClose}> Cancel </Button>
                        <Button color='#DA584B' onClick={addTask}> Create </Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    )
}

export default CreateTaskModal