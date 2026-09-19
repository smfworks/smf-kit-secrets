import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { findTokenHits } from "./tokens.ts";

describe("findTokenHits", () => {
  it("finds xai-, sk-svcacct-, ghp_, and AKIA", () => {
    const source = [
      "xai-abcdefghijklmnopqrstuvwxyz0123456789ABCD",
      "sk-svcacct-abcdefghijklmnopqrstuvwxyz012345",
      "ghp_demoFakeTokenNotReal000111222333444",
      "AKIAIOSFODNN7EXAMPLE",
    ].join("\n");
    const kinds = new Set(findTokenHits(source).map((hit) => hit.kind));
    assert.ok(kinds.has("xai-token"));
    assert.ok(kinds.has("sk-token"));
    assert.ok(kinds.has("github-pat"));
    assert.ok(kinds.has("aws-key"));
  });

  it("does not flag ordinary prose", () => {
    assert.equal(findTokenHits("rotate the lab key in 1password").length, 0);
  });
});
