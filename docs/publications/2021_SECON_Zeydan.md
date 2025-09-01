# Log Management in NFV Service Orchestration


**Authors:** E. Zeydan, J. Baranda, J. Mangues, R. Martínez, _**L. Vettori**_.  
**Conference:** 18th Annual IEEE International Conference on Sensing, Communication, and Networking (SECON), Rome, Italy, 2021.  
**DOI:** [10.1109/SECON52354.2021.9491606](https://doi.org/10.1109/SECON52354.2021.9491606)

## Abstract

Measuring several relevant metrics related to Network Function Virtualization (NFV) service lifecycle management in real time brings an enhanced monitoring of the operation of the network service orchestrator (SO) and the NFV infrastructure. In this demonstration, we integrate a complete data engineering pipeline in an operational management and orchestration stack (that of EU 5Growth project) to analyze lifecycle management metrics in real-time, in this case the network service instantiation time related metrics. In our demonstration, a data connection module instance continuously monitors the NFV SO log files and sends the log changes to the data ingestion layer, where log files are temporarily stored to be fetched by Apache Spark jobs. After utilizing Spark jobs to cleanse the log files and to obtain the service instantiation times, the metrics are sent back to the data ingestion layer to be transferred to the Elasticsearch (ELK) stack for data indexing and visualization purposes. Furthermore, the statistical information of network service instantiation (in total and its components) of studied metrics inside the network can also be profiled via a separate data analysis layer connected to the ELK stack.

[⬅ Back to Publications](index_conferences.md)