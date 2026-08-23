// Flow: ai-pr-code-reviewer

// -- Meta --
export const meta = {
  "name": "AI PR Code Reviewer",
  "description": "",
  "tags": [],
  "testInput": null,
  "githubUrl": "",
  "documentationUrl": "",
  "deployUrl": "",
  "author": {
    "name": "Sushii-dev",
    "email": "sushobhitamajhi41@gmail.com"
  }
};

// -- Inputs --
export const inputs = {
  "InstructorLLMNode_633": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ]
};

// -- References --
export const references = {
  "constitutions": {
    "default": "@constitutions/default.md"
  },
  "prompts": {
    "ai_pr_code_reviewer_instructor_llmnode_633_system_0": "@prompts/ai-pr-code-reviewer_instructor-llmnode-633_system_0.md",
    "ai_pr_code_reviewer_instructor_llmnode_633_user_1": "@prompts/ai-pr-code-reviewer_instructor-llmnode-633_user_1.md"
  },
  "modelConfigs": {
    "ai_pr_code_reviewer_instructor_llmnode_633_generative_model_name": "@model-configs/ai-pr-code-reviewer_instructor-llmnode-633_generative-model-name.ts"
  }
};

// -- Nodes & Edges --
export const nodes = [
  {
    "id": "triggerNode_1",
    "type": "triggerNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "graphqlNode",
      "trigger": true,
      "values": {
        "nodeName": "API Request",
        "advance_schema": "{\"sampleInput\":\"string\"}",
        "responeType": "realtime"
      }
    }
  },
  {
    "id": "InstructorLLMNode_633",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "InstructorLLMNode",
      "values": {
        "nodeName": "Generate JSON",
        "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"summary\": {\n      \"type\": \"string\"\n    },\n    \"security_issues\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"vulnerability\": {\n            \"type\": \"string\"\n          },\n          \"severity\": {\n            \"type\": \"string\"\n          },\n          \"fix_suggestion\": {\n            \"type\": \"string\"\n          }\n        },\n        \"additionalProperties\": true\n      }\n    },\n    \"is_secure\": {\n      \"type\": \"boolean\"\n    }\n  }\n}",
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "content": "@prompts/ai-pr-code-reviewer_instructor-llmnode-633_system_0.md",
            "role": "system"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "content": "@prompts/ai-pr-code-reviewer_instructor-llmnode-633_user_1.md",
            "role": "user"
          }
        ],
        "tools": [],
        "messages": "[]",
        "memories": "[]",
        "attachments": "",
        "generativeModelName": "@model-configs/ai-pr-code-reviewer_instructor-llmnode-633_generative-model-name.ts"
      }
    }
  },
  {
    "id": "responseNode_triggerNode_1",
    "type": "responseNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "graphqlResponseNode",
      "values": {
        "nodeName": "API Response",
        "outputMapping": "{}",
        "webhookUrl": "",
        "headers": "{\"content-type\":\"application/json\"}",
        "retries": "0",
        "retry_delay": "0"
      }
    }
  }
];

export const edges = [
  {
    "id": "triggerNode_1-InstructorLLMNode_633",
    "source": "triggerNode_1",
    "target": "InstructorLLMNode_633",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "InstructorLLMNode_633-responseNode_triggerNode_1",
    "source": "InstructorLLMNode_633",
    "target": "responseNode_triggerNode_1",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "response-trigger_triggerNode_1",
    "source": "triggerNode_1",
    "target": "responseNode_triggerNode_1",
    "sourceHandle": "to-response",
    "targetHandle": "from-trigger",
    "type": "responseEdge"
  }
];

export default { meta, inputs, references, nodes, edges };
