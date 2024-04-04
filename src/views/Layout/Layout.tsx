import { ScrollPanel } from 'primereact/scrollpanel'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {
    DataTable,
} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Toast } from 'primereact/toast'

import './Layout.css'
import {
    InputNumber,
    InputNumberValueChangeEvent,
} from 'primereact/inputnumber'

const Layout = () => {
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState<number>(5)

    const toast = useRef<Toast>(null)

    const show = () => {
        if (toast?.current) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Loading tags list failed',
            })
        }
    }

    const renderHeader = () => {
        return (
            <div className="header">
                <label htmlFor="integeronly" className="label">
                    Rows per page
                </label>
                <InputNumber
                    inputId="integeronly"
                    value={rows}
                    onValueChange={(e: InputNumberValueChangeEvent) => {
                        if (e.value) setRows(e.value)
                    }}
                    showButtons
                    min={5}
                    max={100}
                />
            </div>
        )
    }
    
    useEffect(() => {
        if (tags) setLoading(false)
    }, [tags])

    useEffect(() => {
        setLoading(true)
        const fetchTags = async () => {
            try {
                const response = await axios.get(
                    'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
                )
                setTags(response.data.items)
            } catch (error) {
                show()
            }
        }

        fetchTags()
    }, [])

    return (
        <div className="layout">
            <Toast ref={toast} position="top-center" />
            <div className="list">
                <div className="card">
                    <ScrollPanel style={{ width: '100%', height: '100%' }}>
                        <DataTable
                            value={tags}
                            paginator
                            showGridlines
                            stripedRows
                            selectionMode="single"
                            rows={rows}
                            dataKey="id"
                            header={renderHeader()}
                            loading={loading}
                            emptyMessage="No customers found.">
                            <Column
                                field="name"
                                header="Name"
                                sortable
                                style={{ minWidth: '12rem', height: '3rem' }}
                            />
                            <Column
                                field="count"
                                header="Count"
                                sortable
                                style={{ minWidth: '12rem', height: '3rem' }}
                            />
                        </DataTable>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    )
}

export default Layout
