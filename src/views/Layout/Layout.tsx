import { ScrollPanel } from 'primereact/scrollpanel'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import './Layout.css'
import {
    InputNumber,
    InputNumberValueChangeEvent,
} from 'primereact/inputnumber'

const Layout = () => {
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false)

    const [globalFilterValue, setGlobalFilterValue] = useState('')

    const [filters, setFilters] = useState({})
    const [rows, setRows] = useState<number>(5)

    const onGlobalFilterChange = () => {}

    const renderHeader = () => {
        return (
            <div className='header'>
                <label htmlFor="integeronly" className="font-bold block mb-2">
                    Rows per page
                </label>
                <InputNumber
                    inputId="integeronly"
                    value={rows}
                    onValueChange={(e: InputNumberValueChangeEvent) => {
                        if (e.value) setRows(e.value)
                    }}
                />
            </div>
        )
    }

    const header = renderHeader()

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(
                    'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
                )
                setTags(response.data.items)
            } catch (error) {
                console.error('Error fetching tags:', error)
            }
        }

        fetchTags()
    }, [])

    return (
        <div className="layout">
            <div className="list">
                <div className="card">
                    <ScrollPanel style={{ width: '100%', height: '100%' }}>
                        <DataTable
                            value={tags}
                            paginator
                            showGridlines
                            rows={rows}
                            loading={loading}
                            dataKey="id"
                            header={header}
                            emptyMessage="No customers found."
                        >
                            <Column
                                field="name"
                                header="Name"
                                style={{ minWidth: '12rem' }}
                            />
                            <Column
                                field="count"
                                header="Count"
                                style={{ minWidth: '12rem' }}
                            />
                        </DataTable>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    )
}

export default Layout
