<template>
    <Table>
        <THead>
        <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">First</Th>
            <Th scope="col">Last</Th>
            <Th scope="col">Handle</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr>
            <Th scope="row">1</Th>
            <Td>Mark</Td>
            <Td>Otto</Td>
            <Td>@mdo</Td>
        </Tr>
        <Tr>
            <Th scope="row">2</Th>
            <Td>Jacob</Td>
            <Td>Thornton</Td>
            <Td>@fat</Td>
        </Tr>
        <Tr>
            <Th scope="row" >3</Th>
            <Td colspan="2">Larry The Bird</Td>
            <Td>@twitter</Td>
        </Tr>
        </TBody>

    </Table>
</template>

<script lang="ts" setup>
import {Tr, Table, THead, TBody, Td, Th} from "@/"
</script>