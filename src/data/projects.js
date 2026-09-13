const repo = "https://github.com/geraldadli/research-portfolio/tree/main";

// Source: GeraldAdli_CV.pdf. Metrics describe the reported research evaluation.
// Artwork is an original schematic, not a clinical scan or a product screenshot.
export const projects = [
  {
    id: "brain-mri",
    number: "01",
    category: "Medical imaging",
    year: "2025",
    title: "A clearer view.\nA smarter model.",
    name: "Brain tumour MRI classification",
    description:
      "Exploring hybrid deep learning to distinguish four brain MRI classes, with interpretability built into the pipeline.",
    tags: ["PyTorch", "Vision Transformer", "Bidirectional GRU"],
    metric: "92.6%",
    metricLabel: "held-out accuracy",
    context: "1,311 scans · 0.93 weighted F1",
    role: "First author",
    href: `${repo}/01-brain-tumor-vit-gru`,
    visual: "brain",
    pipeline: ["MRI", "ViT-B/16", "BiGRU", "4 classes"],
    chapters: [
      {
        label: "The question",
        title: "What can a scan reveal?",
        body: "Four classes. Subtle differences. This research explores how a model can distinguish glioma, meningioma, pituitary, and no-tumour MRI scans.",
        visualLabel: "Observe the input",
      },
      {
        label: "The approach",
        title: "Find the patterns. Make them interpretable.",
        body: "A Vision Transformer and bidirectional GRU form the hybrid architecture. I owned the full pipeline, from preprocessing and training to SHAP attributions and t-SNE feature projections.",
        visualLabel: "Explore the features",
      },
      {
        label: "The evidence",
        title: "A result you can examine.",
        body: "Evaluation on 1,311 held-out scans produced the results below. The code, evaluation figures, and implementation limitations are documented alongside the research.",
        visualLabel: "Evaluate the model",
      },
    ],
    details:
      "I owned preprocessing, training, evaluation, and interpretation using SHAP and t-SNE. The repository includes evaluation figures, dataset provenance, and implementation limitations. This is research work; the reported metrics are from a held-out evaluation.",
  },
  {
    id: "crop-rl",
    number: "02",
    category: "Precision agriculture",
    year: "2026",
    title: "Learning to look.\nLearning to grow.",
    name: "RL-guided active crop localization",
    description:
      "Turning crop detection into sequential decision-making. An agent learns to refine bounding boxes, one decision at a time.",
    tags: ["YOLOv12", "Deep Q-Network", "Streamlit"],
    metric: "0.969",
    metricLabel: "mean intersection over union",
    context: "0.09 s / sample · reported evaluation",
    role: "Co-author · Elsevier, 2026",
    href: `${repo}/03-crop-localization-rl`,
    visual: "crop",
    pipeline: ["YOLOv12", "DQN", "IoU reward"],
    chapters: [
      {
        label: "The question",
        title: "Can a detector learn where to look?",
        body: "Crop localization is a question of precision: finding the right region in the image. This work treats that search as a sequence of decisions.",
        visualLabel: "Observe the scene",
      },
      {
        label: "The approach",
        title: "Observe. Adjust. Learn.",
        body: "A deep Q-network agent refines CNN detector boxes against an intersection-over-union reward. An interactive Streamlit dashboard brings the decision process into view.",
        visualLabel: "Refine the region",
      },
      {
        label: "The evidence",
        title: "Precision, measured.",
        body: "The reported evaluation achieved a mean intersection over union of 0.969 at 0.09 seconds per sample. Explore the study to understand the evaluation setup and its limitations.",
        visualLabel: "Measure the overlap",
      },
    ],
    details:
      "Co-authored research combining CNN detectors with a reinforcement learning agent and an interactive decision dashboard. The agent refines detector boxes against an intersection-over-union reward. Explore the repository for the paper, evaluation setup, and limitations.",
  },
];
export const otherResearch = [
  {
    number: "03",
    title: "Optimizing the next connection.",
    name: "RIS-aided 5G MISO networks",
    description:
      "Exploring deep reinforcement learning for reconfigurable intelligent surface aided wireless networks. Research in network optimization, published in Discover Applied Sciences in 2026.",
    category: "Deep reinforcement learning",
    year: "2026",
    href: `${repo}/04-ris-miso-5g-drl`,
  },
  {
    number: "04",
    title: "Understanding human signals.",
    name: "Cognitive skills & EEG classification",
    description:
      "Research into cognitive skills through hybrid optimized CNNs for EEG signal classification, with OpenBCI validation. Published in Brain Organoid and Systems Neuroscience Journal in 2025.",
    category: "Affective computing",
    year: "2025",
    href: "https://scholar.google.com/citations?user=o5RjtT0AAAAJ&hl=en",
  },
];
