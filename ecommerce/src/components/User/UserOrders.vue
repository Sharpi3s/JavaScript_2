<template>


  <tbody>
    <tr>
      
      <td>{{ order._id }}</td>
      <td>{{ order.createdAt }}</td>
      <td>$ {{ order.totalprice }}</td>
      <td class="d-flex justify-content-end"><button class="btn py-1 px-2">X</button></td>
    </tr>

  </tbody>

</template>

<script>
export default {
  props: ['order']
}
</script>

<style>

</style>