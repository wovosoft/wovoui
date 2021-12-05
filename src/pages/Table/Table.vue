<template>
    <h2>Tables</h2>
    <p>
        It is used to display <code>&lt;table&gt;</code> in Bootstrap Way.
    </p>
    <Card>
        <highlightjs
            language="xml"
            code='<Table>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'
        />
    </Card>
    <TheTable>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>

    <h2>Variants</h2>
    <p>Use contextual classes to color tables, table rows or individual cells.</p>
    <p>
        Variants can be used in all table components like
        <template v-for="i in ['Table','THead','TBody','TFoot','Tr','Th','Td']">
            <code>{{ i }}</code>,
        </template>
    </p>
    <Card>
        <highlightjs
            language="xml"
            :code='"<Table>\n"+
"    <THead>\n"+
"    <Tr>\n"+
"        <Th>SL</Th>\n"+
"        <Th>Class</Th>\n"+
"        <Th>Heading</Th>\n"+
"    </Tr>\n"+
"    </THead>\n"+
"    <TBody>\n"+
"    <Tr v-for=\"(i,k) in "+JSON.stringify(variants)+"\"\n"+
"        :variant=\"i\"\n"+
"        :key=\"k\">\n"+
"        <Td>{{ k + 1 }}</Td>\n"+
"        <Td>{{ i }}</Td>\n"+
"        <Td>{{ i }}</Td>\n"+
"    </Tr>\n"+
"    </TBody>\n"+
"</Table>"'
        />
    </Card>
    <TheTable>
        <THead>
        <Tr>
            <Th>SL</Th>
            <Th>Class</Th>
            <Th>Heading</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="(i,k) in variants"
            :variant="i"
            :key="k">
            <Td>{{ k + 1 }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>

    <h2>Striped rows</h2>
    <p>
        To make table rows striped, add <code>boolean</code> property <code>striped</code> to the Table component.
        Property <code>striped</code> can have only two values, either <code>true</code> or <code>false</code>. When
        <code>striped</code> is set to <code>true</code>, it adds <code>.table-striped</code> class to the
        rendered <code>table</code> element.
    </p>
    <Card>
        <highlightjs language="xml" code='<Table striped>
<THead>
<Tr>
    <Th>One</Th>
    <Th>Two</Th>
    <Th>Three</Th>
    <Th>Four</Th>
</Tr>
</THead>
<TBody>
<Tr v-for="i in 10">
    <Td>{{ i }}</Td>
    <Td>{{ i }}</Td>
    <Td>{{ i }}</Td>
    <Td>{{ i }}</Td>
</Tr>
</TBody>
</Table>'/>
    </Card>
    <TheTable striped>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>

    <h2>Hoverable rows</h2>
    <p>
        Set boolean property <code>hover</code> to enable a hover state on table rows within a
        <code>&lt;tbody&gt;</code>. When property value of <code>hover</code> is set to <code>true</code>,
        it adds <code>.table-hover</code> class to the rendered <code>&lt;table&gt;</code> element.
    </p>
    <highlightjs language="xml" code='<Table hover>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'/>
    <TheTable hover>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>

    <h2>Active tables</h2>
    <p>
        Highlight a table row or cell by adding boolean property <code>active</code>. When property value of
        <code>active</code> is set to <code>true</code>, it adds <code>.table-active</code>
        class to the table elements like table, tr, td etc.
    </p>
    <Card>
        <highlightjs language="xml" code='<Table>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10" :active="i===5">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td :active="i===7">{{ i }}</Td>
            <Td :active="i===7">{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'
        />
    </Card>

    <TheTable>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10" :active="i===5">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td :active="i===7">{{ i }}</Td>
            <Td :active="i===7">{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>
    <h2>Bordered tables</h2>
    <p>
        Add boolean property <code>bordered</code> to apply borders for the table, cells and rows.
        When property value of <code>bordered</code> is set to <code>true</code>, it adds <code>.table-bordered</code>
        class to the rendered <code>&lt;table&gt;</code> element.
    </p>
    <p>
        To add variant to the border color, add property <code>color-variant</code>. When value for
        <code>color-variant</code>
        is set, it will add <code>.color-*variant</code> class to the rendered <code>table</code> element.
        Values for <code>color-variant</code> property can be
        <template v-for="v in variants">
            <code>{{ v }}</code>,
        </template>
    </p>

    <Card>
        <highlightjs
            language="xml"
            code='<Table :bordered="true" border-variant="primary">
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'/>
    </Card>
    <br>
    <TheTable :bordered="true" border-variant="primary">
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>
    <h2>Tables without borders</h2>
    <p>
        Add boolean property <code>borderless</code> to make <code>table</code> borderless. When property value for
        <code>borderless</code> is set to <code>true</code>, it adds <code>.table-borderless</code> class to
        the rendered <code>table</code> element.
    </p>
    <Card class="mb-3">
        <highlightjs
            language="xml"
            code='<Table borderless>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'/>
    </Card>

    <TheTable borderless>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>
    <h2>Small tables</h2>
    <p>
        Set boolean property <code>small</code> to <code>true</code> to make any
        <code>table</code> more compact by cutting all cell padding in half.
    </p>
    <Card class="mb-3">
        <highlightjs language="xml" code='<Table small>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </Table>'/>
    </Card>
    <TheTable small>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>

    <h2>Vertical alignment</h2>
    <p>
        Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the bottom.
        Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code>
        and are aligned to the the top by default. Use the vertical align classes to re-align where needed.
        This can be done by applying alignment values to the <code>align</code> property. Values for
        <code>align</code> can be <code>middle</code>, <code>bottom</code>, <code>top</code> .
    </p>
    <p>
        Note: <code>align</code> property can be used to any table elements like <code>Table</code>,
        <code>TBody</code>, <code>THead</code>, <code>Tr</code>, <code>Th</code>, <code>Th</code> etc.
    </p>
    <Card class="mb-3">
        <highlightjs language="xml" code='<Table align="middle">
    <THead>
    <Tr>
        <Th v-for="i in 4">{{ i }}</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr>
        <Td v-for="i in 4">{{ i }}</Td>
    </Tr>
    <Tr align="bottom">
        <Td v-for="i in 4">{{ i }}</Td>
    </Tr>
    <Tr>
        <Td v-for="i in 2">{{ i }}</Td>
        <Td align="top">This cell is aligned to the top.</Td>
        <Td>4</Td>
    </Tr>
    </TBody>
</Table>'/>
    </Card>


    <TheTable align="middle">
        <THead>
        <Tr>
            <Th v-for="i in 4">{{ i }}</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr>
            <Td v-for="i in 4">{{ i }}</Td>
        </Tr>
        <Tr align="bottom">
            <Td v-for="i in 4">{{ i }}</Td>
        </Tr>
        <Tr>
            <Td v-for="i in 2">{{ i }}</Td>
            <Td align="top">This cell is aligned to the top.</Td>
            <Td>4</Td>
        </Tr>
        </TBody>
    </TheTable>


    <h2>Nesting</h2>
    <p>
        Border styles, active styles, and table variants are not inherited by nested tables.
        So child table can be used independently.
    </p>
    <p>
        See, on the container table property <code>bordered</code> and <code>border-variant</code>
        is set, and on the child table only <code>bordered</code> property is set. Child table
        didn't inherit the parent table's style.
    </p>
    <Card class="mb-3">
        <highlightjs language="xml" code='<Table bordered border-variant="primary">
    <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 5">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        <Tr>
            <Td colspan="4">
                <Table bordered>
                    <THead>
                    <Tr>
                        <Th>One</Th>
                        <Th>Two</Th>
                        <Th>Three</Th>
                    </Tr>
                    </THead>
                    <TBody>
                    <Tr v-for="i in 5">
                        <Td>{{ i }}</Td>
                        <Td>{{ i }}</Td>
                        <Td>{{ i }}</Td>
                    </Tr>
                    </TBody>
                </Table>
            </Td>
    </Tr>
    </TBody>
</Table>'/>
    </Card>
    <TheTable bordered border-variant="primary">
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 5">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        <Tr>
            <Td colspan="4">
                <TheTable bordered>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 5">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>
    </Td>
    </Tr>
    </TBody>
    </TheTable>

    <h2>Responsive tables</h2>
    <p>
        Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all
        viewports by property <code>responsive</code>. Values of <code>responsive</code>
        can be
        <template v-for="i in ['sm','md','lg','xl','xxl']">
            <code>{{ i }}</code>,
        </template>
        <code>true</code>, <code>false</code>. When value is set to <code>true</code>, table will be responsive for
        all viewports.
    </p>
    <Card class="mb-3">
        <highlightjs language="xml" code='<TheTable :responsive="true" bordered>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
        <Th>Four</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 10">
        <Td>{{ i }}</Td>
        <Td>{{ i }}</Td>
        <Td>{{ i }}</Td>
        <Td>{{ i }}</Td>
    </Tr>
    </TBody>
</TheTable>'/>
    </Card>
    <TheTable :responsive="true" bordered>
        <THead>
        <Tr>
            <Th>One</Th>
            <Th>Two</Th>
            <Th>Three</Th>
            <Th>Four</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="i in 10">
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
            <Td>{{ i }}</Td>
        </Tr>
        </TBody>
    </TheTable>
    <h2>Component Reference</h2>

</template>

<script>
//can't have same component name as the container
import TheTable from "../../components/Table.vue";
import THead from "../../components/THead.vue";
import Th from "../../components/Th.vue";
import Tr from "../../components/Tr.vue"
import TBody from "../../components/TBody.vue";
import Td from "../../components/Td.vue"
import Card from "../../components/Card.vue";

export default {
    name: "TablePage",
    components: {Card, Th, THead, TheTable, Tr, TBody, Td},
    data() {
        return {
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link', 'dark', 'light']
        }
    }
}
</script>
