const ops = Deno[Deno.internal].core.ops;

await Deno.mkdir("data", {
  recursive: true,
});

await Deno.writeTextFile("data/ops.json", Object.keys(ops).join("\n"));
