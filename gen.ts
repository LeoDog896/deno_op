const ops = Deno[Deno.internal].core.ops;
const targetFile = Deno.args[0];

await Deno.mkdir(targetFile, { recursive: true });
await Deno.writeTextFile(targetFile, Object.keys(ops).join("\n"));