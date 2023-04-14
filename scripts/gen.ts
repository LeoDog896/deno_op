const ops = Deno[Deno.internal].core.ops;

await Deno.writeTextFile(
  "_data.json",
  JSON.stringify(
    {
      ops: Object.keys(ops),
    },
    null,
    2,
  ),
);
