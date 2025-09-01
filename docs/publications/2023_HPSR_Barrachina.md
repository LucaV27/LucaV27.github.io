# Cloud Native Federated Learning for Streaming: An Experimental Demonstrator


**Authors:** S. Barrachina-Muñoz, E. Zeydan, L. Blanco, _**L. Vettori**_, F. Rezazadeh, J. Mangues-Bafalluy.  
**Conference:** 2023 IEEE 24th International Conference on High Performance Switching and Routing (HPSR), Albuquerque, NM, USA, 2023.  
**DOI:** [10.1109/HPSR57248.2023.10147920](https://doi.org/10.1109/HPSR57248.2023.10147920)


## Abstract

This paper demonstrates an implementation of Federated Learning (FL) for streaming applications using cloud-native technology. Compared to a centralized management, by adopting a decentralized approach, the FL method improves convergence time, reduces communication overhead, and increases network energy efficiency. The cloud-native FL architecture presented comprises three sites, each with its own Kubernetes (K8s) cluster. The edge sites run FL Analytical Engines (AEs)/clients for local training and updates, and the central site runs the aggregation server for FL training. Some other relevant workloads deployed at the clusters are the video streaming server, the orchestrator, and monitoring components. As for the RAN, we showcase a multi-gNB setup from which we obtain monitoring data via custom sampling functions. Following the description of the testbed infrastructure and setup, this demonstration presents the real-time visualization of network parameters during FL training, and the enhancement of video streaming through proactive Central Processing Unit (CPU) scaling, made possible by the resource forecasting.

[⬅ Back to Publications](index_conferences.md)