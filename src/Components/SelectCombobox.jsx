import React from 'react';

import { Combobox,Button, Group, useCombobox} from '@mantine/core';
import { getFieldDef } from 'graphql/execution/execute';

function SelectCombobox({ setState, options, children }) {

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption()
    })

    return (
        <Combobox
            store={combobox}
            width={250}
            position="bottom-start"
            onOptionSubmit={(val) => {
                setState(val)
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <Button 
                    onClick={() => combobox.toggleDropdown()}
                    bg="#94979A1A"
                >
                    <Group wrap='nowrap'>
                        {children}
                    </Group>
                </Button>
            </Combobox.Target>
            <Combobox.Dropdown bg="#94979A">
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}

export default SelectCombobox