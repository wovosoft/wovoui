<script setup lang="ts">
import {Button, Container, ButtonGroup, ButtonToolbar} from "@/index";
</script>

<template>
	<Container>
		<h4>Basic example</h4>
		<ButtonGroup>
			<Button variant="dark">First</Button>
			<Button variant="danger">Second</Button>
			<Button variant="primary">Third</Button>
		</ButtonGroup>
		
		<h4 class="mt-5">Outlined Button Group</h4>
		<ButtonGroup outline>
			<Button variant="dark">First</Button>
			<Button variant="danger">Second</Button>
			<Button variant="primary">Third</Button>
		</ButtonGroup>
		
		<h4 class="mt-5">Button Toolbar</h4>
		<ButtonToolbar aria-label="Toolbar with button groups">
			<ButtonGroup class="me-2" aria-label="First group">
				<Button variant="dark">First</Button>
				<Button variant="danger">Second</Button>
				<Button variant="primary">Third</Button>
			</ButtonGroup>
			<ButtonGroup class="me-2" aria-label="Second group">
				<Button variant="dark">First</Button>
				<Button variant="danger">Second</Button>
				<Button variant="primary">Third</Button>
			</ButtonGroup>
			<ButtonGroup aria-label="Third group">
				<Button variant="dark">First</Button>
				<Button variant="danger">Second</Button>
				<Button variant="primary">Third</Button>
			</ButtonGroup>
		</ButtonToolbar>
		
		<h4 class="mt-5">Sizing</h4>
		<ButtonGroup size="sm">
			<Button variant="dark">First</Button>
			<Button variant="danger">Second</Button>
			<Button variant="primary">Third</Button>
		</ButtonGroup>
		<br/>
		<br/>
		<ButtonGroup size="lg">
			<Button variant="dark">First</Button>
			<Button variant="danger">Second</Button>
			<Button variant="primary">Third</Button>
		</ButtonGroup>
		
		<h4 class="mt-5">Vertical</h4>
		<ButtonGroup vertical>
			<Button variant="dark">First</Button>
			<Button variant="danger">Second</Button>
			<Button variant="primary">Third</Button>
		</ButtonGroup>
	</Container>
</template>
