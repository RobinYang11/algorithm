

#define MAX 100

typedef struct Node
{
  char *value;
  int *parent;
  int *index;
};

typedef struct ParentTree
{
  struct Node nodes[MAX];
  int *nodeNum;
};

int treeDepth(struct ParentTree *tree)
{
  int maxDepth = 0;

  for (int i = 0; i < tree->nodeNum; i++)
  {
    int depth = 0;
    for (int j = i; j > 0; j = tree->nodes[j].parent)
    {
      depth++;
    }
    if (depth > maxDepth)
    {
      maxDepth = depth;
    }
  }
  return maxDepth;
}

int main(int argc, char const *argv[])
{

  return 0;
}