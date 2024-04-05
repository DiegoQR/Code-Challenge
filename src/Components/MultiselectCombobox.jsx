import React, { useState } from 'react';

import { Combobox, Input, PillsInput, Pill, useCombobox } from '@mantine/core';

import { IconTag } from '@tabler/icons-react'

function MultiselectCombobox({state, changeState, options, children}) {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    })

    function handelValueSelect(val) {
        changeState((current) =>
            current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
        )
    }

    function handleValueRemove(val) {
        changeState((current) => current.filter((v) => v !== val));
    }

    const values = state.map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
            {item}
        </Pill>
    ))

    function openOptions() {
        console.log()
        console.log(state)
        console.log(options)
        combobox.toggleDropdown()
    }

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handelValueSelect}
            withinPortal={false}
        >
            <Combobox.DropdownTarget>
                <PillsInput pointer onClick={openOptions}>
                    <Pill.Group>
                        {values.length > 0 ? (
                        values
                        ) : (
                        <Input.Placeholder>Pick one or more values</Input.Placeholder>
                        )}
                        <Combobox.EventsTarget>
                        <PillsInput.Field
                            type="hidden"
                            onBlur={() => combobox.closeDropdown()}
                            onKeyDown={(event) => {
                            if (event.key === 'Backspace') {
                                event.preventDefault();
                                handleValueRemove(state[state.length - 1]);
                            }
                            }}
                        />
                        </Combobox.EventsTarget>
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}

export default MultiselectCombobox;